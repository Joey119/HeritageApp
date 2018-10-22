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

            CreateMap<EvaluationOption, EvaluationOptionDto>();
            CreateMap<EvaluationOptionDto, EvaluationOption>();

            CreateMap<EvaluatorType, EvaluatorTypeDto>();
            CreateMap<EvaluatorTypeDto, EvaluatorType>();
            
            CreateMap<Heritage, HeritageDto>()
            .ForMember(dest => dest.CreatedUserName, opt => opt.MapFrom(src => src.CreatedUser.UserName))
            .ForMember(dest => dest.ModifiedUserName, opt => opt.MapFrom(src => src.ModifiedUser.UserName));
            
            CreateMap<HeritageDto, Heritage>()
            .ForMember(dest => dest.CreatedUser, opt => opt.Ignore())
            .ForMember(dest => dest.ModifiedUser, opt => opt.Ignore())
            .ForMember(dest => dest.HeritageComments, opt => opt.Ignore())
            .ForMember(dest => dest.FileUploads, opt => opt.Ignore())
            .ForMember(dest => dest.ActivationMode, opt => opt.Ignore())
            .ForMember(dest => dest.HeritageEvaluations, opt => opt.Ignore())
            .ForMember(dest => dest.HeritageGameAnalysis, opt => opt.Ignore());

            CreateMap<HeritageComment, HeritageCommentDto>()
            .ForMember(dest => dest.CommentUserName, opt => opt.MapFrom(src => src.CommentUser.UserName));

            CreateMap<HeritageCommentDto, HeritageComment>()
            .ForMember(dest => dest.CommentUser, opt => opt.Ignore());

            CreateMap<FileUpload, FileUploadDto>()
            .ForMember(dest => dest.UploadUserName, opt => opt.MapFrom(src => src.UploadUser.UserName));

            CreateMap<FileUploadDto, FileUpload>()
            .ForMember(dest => dest.UploadUser, opt => opt.Ignore());

            CreateMap<ActivationMode, ActivationModeDto>()
            .ForMember(dest => dest.CreatedUserName, opt => opt.MapFrom(src => src.CreatedUser.UserName))
            .ForMember(dest => dest.ModifiedUserName, opt => opt.MapFrom(src => src.ModifiedUser.UserName));

            CreateMap<ActivationModeDto, ActivationMode>()
            .ForMember(dest => dest.CreatedUser, opt => opt.Ignore())
            .ForMember(dest => dest.ModifiedUser, opt => opt.Ignore());

            CreateMap<HeritageEvaluation, HeritageEvaluationDto>()
            .ForMember(dest => dest.CreatedUserName, opt => opt.MapFrom(src => src.CreatedUser.UserName))
            .ForMember(dest => dest.ModifiedUserName, opt => opt.MapFrom(src => src.ModifiedUser.UserName));

            CreateMap<HeritageEvaluationDto, HeritageEvaluation>()
            .ForMember(dest => dest.CreatedUser, opt => opt.Ignore())
            .ForMember(dest => dest.ModifiedUser, opt => opt.Ignore());

            CreateMap<HeritageGameAnalysis, HeritageGameAnalysisDto>()
            .ForMember(dest => dest.CreatedUserName, opt => opt.MapFrom(src => src.CreatedUser.UserName))
            .ForMember(dest => dest.ModifiedUserName, opt => opt.MapFrom(src => src.ModifiedUser.UserName));

            CreateMap<HeritageGameAnalysisDto, HeritageGameAnalysis>()
            .ForMember(dest => dest.CreatedUser, opt => opt.Ignore())
            .ForMember(dest => dest.ModifiedUser, opt => opt.Ignore());

        }
    }
}