using AutoMapper;
using HeritageApp.Models.Database;

namespace HeritageApp.Helpers
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<User, UserDto>();
            
            CreateMap<UserDto, User>();
            
            CreateMap<Heritage, HeritageDto>()
            .ForMember(dest => dest.CreatedUserName, opt => opt.MapFrom(src => src.CreatedUser.UserName))
            .ForMember(dest => dest.ModifiedUserName, opt => opt.MapFrom(src => src.ModifiedUser.UserName));
            
            CreateMap<HeritageDto, Heritage>()
            .ForMember(dest => dest.CreatedUser, opt => opt.Ignore())
            .ForMember(dest => dest.ModifiedUser, opt => opt.Ignore())
            .ForMember(dest => dest.HeirtageComments, opt => opt.Ignore())
            .ForMember(dest => dest.FileUploads, opt => opt.Ignore());

            CreateMap<HeritageComment, HeritageCommentDto>()
            .ForMember(dest => dest.CommentUserName, opt => opt.MapFrom(src => src.CommentUser.UserName));

            CreateMap<HeritageCommentDto, HeritageComment>()
            .ForMember(dest => dest.CommentUser, opt => opt.Ignore());

            CreateMap<FileUpload, FileUploadDto>()
            .ForMember(dest => dest.UploadUserName, opt => opt.MapFrom(src => src.UploadUser.UserName));

            CreateMap<FileUploadDto, FileUpload>()
            .ForMember(dest => dest.UploadUser, opt => opt.Ignore());

        }
    }
}