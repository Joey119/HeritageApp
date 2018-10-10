using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Net.Http.Headers;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using System.IO;
using AutoMapper;
using HeritageApp.Models.Action;
using HeritageApp.Models.Database;
using HeritageApp.Helpers;

namespace HeritageApp.Controllers
{
    //api/Files
    [Authorize]
    [Route("api/[controller]")]
    public class FileController: Controller
    {
        private readonly HeritageContext _context;
        private IMapper _mapper;
        public List<SystemFile> colSystemFiles = new List<SystemFile>();
        private readonly IHostingEnvironment _hostEnvironment;
        public FileController(IHostingEnvironment hostEnvironment, 
                                HeritageContext context,
                                IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
            _hostEnvironment = hostEnvironment;
            // Set WebRootPath to wwwroot\Files directiry
            _hostEnvironment.WebRootPath =
                System.IO.Path.Combine(
                    Directory.GetCurrentDirectory(),
                    @"wwwroot\Files");
        }

        // api/Upload
        [HttpPost("upload")]
        public IActionResult UploadFile(ICollection<IFormFile> files, int heritageId, int uploadUserId)
        {
            
            if (!Request.HasFormContentType)
                return BadRequest();
            // Create wwwroot\Files directory if needed
            if (!Directory.Exists(_hostEnvironment.WebRootPath))
            {
                DirectoryInfo di = 
                    Directory.CreateDirectory(_hostEnvironment.WebRootPath);
            }
            var form = Request.Form;
            var fileNameShort = "";
            var fileNameLong= "";
            // Process all Files
            foreach (var file in form.Files)
            {
                // Process file
                using (var readStream = file.OpenReadStream())
                {
                    var filename = ContentDispositionHeaderValue
                                            .Parse(file.ContentDisposition)
                                            .FileName
                                            .Trim();
                    fileNameShort = filename.ToString();
                    filename = _hostEnvironment.WebRootPath + $@"\{filename}";
                    fileNameLong = filename.ToString();
                    //Save file to harddrive
                    using (FileStream fs = System.IO.File.Create(filename.ToString()))
                    {
                        file.CopyTo(fs);
                        fs.Flush();
                        _context.FileUploads.Add(new FileUpload{
                            HeritageId = heritageId,
                            FileName = fileNameShort,
                            FilePath = fileNameLong,
                            UploadUserId = uploadUserId
                        });
                    }

                    _context.SaveChanges();
                }
            }
            return Ok();
        }

        // api/Files/SystemFiles get all files
        #region public IEnumerable<SystemFile> SystemFiles()
        [HttpGet("getFiles")]
        public IEnumerable<SystemFile> SystemFiles()
        {
            colSystemFiles = new List<SystemFile>();

            if (Directory.Exists(_hostEnvironment.WebRootPath))
            {
                // Get Files
                ProcessDirectory(_hostEnvironment.WebRootPath);
            }

            return colSystemFiles;
        }
        #endregion

        // api/Files/GetHeritageFile
        [HttpGet]
        [Route("getHeritageFile/{id:int}")]
        public async Task<IEnumerable<FileUploadDto>> GetHeritageFile(long id)
        {
            //fetch all user records
            try
            {
                var task = await _context.FileUploads
                .Include(upload => upload.UploadUser)
                .Where(file => file.HeritageId == id)
                .ToListAsync();

                return new List<FileUploadDto>(
                    _mapper.Map<List<FileUploadDto>>(task)
                );
            }
            catch
            {
                throw;
            }            
        }

        // api/Files/DeleteFile
        [HttpDelete("{id}")]
        public IActionResult DeleteFile(int id)
        {
            try
            {
                var heritageFile = _context.FileUploads.FirstOrDefault(t => t.Id == id);
                if (heritageFile == null)
                {
                    return NotFound();
                }

                // Allow user to only delete a file in Files directory
                string FileToDelete = 
                    Path.Combine(_hostEnvironment.WebRootPath, heritageFile.FileName);
                System.IO.File.Delete(FileToDelete);

                _context.FileUploads.Remove(heritageFile);
                _context.SaveChanges();
            }
            catch (Exception ex)
            {
                throw ex;
            } 

            return Ok();
        }

        [HttpGet]
        [Route("downloadFile/{id:int}")]
        public async Task<IActionResult> DownloadFile(int id)
        {
            try
            {
                var heritageFile = _context.FileUploads.FirstOrDefault(t => t.Id == id);
                string file = Path.Combine(_hostEnvironment.WebRootPath, heritageFile.FileName);

                var memory = new MemoryStream();
                using (var stream = new FileStream(file, FileMode.Open))
                {
                    await stream.CopyToAsync(memory);
                }
                
                memory.Position = 0;
                return File(memory, GetMimeType(file), heritageFile.FileName);
            }
            catch (Exception e)
            {
            return BadRequest(e);
            }
        }

        // Utility

        private string GetMimeType(string file)
        {
            string extension = Path.GetExtension(file).ToLowerInvariant();
            switch (extension)
            {
            case ".txt": return "text/plain";
            case ".pdf": return "application/pdf";
            case ".doc": return "application/vnd.ms-word";
            case ".docx": return "application/vnd.ms-word";
            case ".xls": return "application/vnd.ms-excel";
            case ".png": return "image/png";
            case ".jpg": return "image/jpeg";
            case ".jpeg": return "image/jpeg";
            case ".gif": return "image/gif";
            case ".csv": return "text/csv";
            default: return "";
            }
        }
        
        #region public void ProcessDirectory(string targetDirectory)
        // Process all files in the directory passed in, recurse on any directories 
        // that are found, and process the files they contain.
        private void ProcessDirectory(string targetDirectory)
        {
            // Process the list of files found in the directory.
            string[] fileEntries = Directory.GetFiles(targetDirectory);
            foreach (string fileName in fileEntries)
            {
                ProcessFile(fileName);
            }

            // Recurse into subdirectories of this directory.
            string[] subdirectoryEntries = Directory.GetDirectories(targetDirectory);
            foreach (string subdirectory in subdirectoryEntries)
                ProcessDirectory(subdirectory);
        }
        #endregion

        #region public void ProcessFile(string path)
        // Insert logic for processing found files here.
        private void ProcessFile(string path)
        {
            string FileName = Path.GetFileName(path);
            string FilePath = path;

            colSystemFiles.Add(new SystemFile() { FileName = FileName, FilePath = FilePath });
        }
        #endregion

    }
}