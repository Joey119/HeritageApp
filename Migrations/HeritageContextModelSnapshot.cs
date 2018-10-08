﻿// <auto-generated />
using System;
using HeritageApp.Models.Database;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace HeritageApp.Migrations
{
    [DbContext(typeof(HeritageContext))]
    partial class HeritageContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn)
                .HasAnnotation("ProductVersion", "2.1.1-rtm-30846")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            modelBuilder.Entity("HeritageApp.Models.Database.FileUpload", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("FileName")
                        .HasMaxLength(50);

                    b.Property<string>("FilePath");

                    b.Property<int>("HeritageID");

                    b.Property<int>("UserID");

                    b.HasKey("ID");

                    b.HasIndex("HeritageID");

                    b.ToTable("FileUploads");
                });

            modelBuilder.Entity("HeritageApp.Models.Database.Heritage", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("BatchNo")
                        .HasMaxLength(20);

                    b.Property<int>("CreatedBy");

                    b.Property<DateTime>("CreatedOn");

                    b.Property<string>("CurrentStatus");

                    b.Property<string>("EndangeredStatus");

                    b.Property<string>("History");

                    b.Property<string>("Inheritors");

                    b.Property<string>("Masterpiece");

                    b.Property<int>("ModifiedBy");

                    b.Property<DateTime>("ModifiedOn");

                    b.Property<string>("Name")
                        .HasMaxLength(100);

                    b.Property<double>("PresentValue");

                    b.Property<string>("ProjectOverview");

                    b.Property<string>("Province")
                        .HasMaxLength(50);

                    b.Property<string>("RegistrationDistrict");

                    b.Property<string>("RegistrationYear")
                        .HasMaxLength(4);

                    b.Property<double>("TourismBenefit");

                    b.Property<string>("TourismDevelopmentModel");

                    b.Property<string>("TourismMarketCharacteristics");

                    b.Property<double>("TourismPrice");

                    b.Property<string>("TourismProduct");

                    b.Property<string>("TourismStatus");

                    b.Property<string>("TypeofProject");

                    b.HasKey("ID");

                    b.ToTable("Heritages");
                });

            modelBuilder.Entity("HeritageApp.Models.Database.HeritageComment", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("CommentDate");

                    b.Property<string>("CommentText");

                    b.Property<int>("DownVoteCount");

                    b.Property<int>("HeritageID");

                    b.Property<int>("UpVoteCount");

                    b.Property<int>("UserID");

                    b.HasKey("ID");

                    b.HasIndex("HeritageID");

                    b.ToTable("HeritageComments");
                });

            modelBuilder.Entity("HeritageApp.Models.Database.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("CanComment");

                    b.Property<string>("FirstName")
                        .HasMaxLength(50);

                    b.Property<bool>("IsAdmin");

                    b.Property<bool>("IsContributer");

                    b.Property<bool>("IsReadOnly");

                    b.Property<string>("LastName")
                        .HasMaxLength(50);

                    b.Property<byte[]>("PasswordHash");

                    b.Property<byte[]>("PasswordSalt");

                    b.Property<string>("UserName")
                        .HasMaxLength(50);

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("HeritageApp.Models.Database.FileUpload", b =>
                {
                    b.HasOne("HeritageApp.Models.Database.Heritage")
                        .WithMany("FileUploads")
                        .HasForeignKey("HeritageID")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("HeritageApp.Models.Database.HeritageComment", b =>
                {
                    b.HasOne("HeritageApp.Models.Database.Heritage")
                        .WithMany("HeirtageComments")
                        .HasForeignKey("HeritageID")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
