const data = [
  {
    Id: 0,
    Slug: "tutor-chenluu",
    Title: "Chen Luu",
    Username: "chenluu",
    Email: "chenluu@gmail.com",
    Name: "Chen Luu",
    Subjects: "Math, Engineering, Science",
    Desc: "I'm a passionate tutor looking for students who are interested in retrieving the best tutoring experience offered by TutorU. Please consider choosing me, I'm sure you'll be satisfied with your educational results!",
    ProfilePicture: "https://images.generated.photos/UZ0_c9YMg-yU7FP-NCeDFoz8mET6ybY336toH1u9bxE/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTU3OTIzLmpwZw.jpg",
    Address: {
      country: "USA",
      state: "Washington",
      city: "Newport"
    }
  },
  {
    Id: 1,
    Slug: "tutor-roysingh",
    Title: "Roy Singh",
    Username: "roysingh",
    Email: "roysingh@gmail.com",
    Name: "Roy Singh",
    Subjects: "History, Advanced Mathematics",
    Desc: "I'm Roy or Mr. Singh. I've been a teacher for 15 years and I'm now providing 1 on 1 tutoring with my favorite platform TutorU! I provide many examples and optional take home work to ensure your success!",
    ProfilePicture: "https://images.generated.photos/Vnt71-C7QSF6mEaQCu636HMzkxZQp9rUtgQ8dVRKGCs/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjAxMzY0LmpwZw.jpg",
    Address: {
      country: "Canada",
      state: "Alberta",
      city: "Calgary"
    }
  },
  {
    Id: 2,
    Slug: "tutor-sofiaria",
    Title: "Sofia Ria",
    Username: "sofiaria",
    Email: "sofiaria@outlook.com",
    Name: "Sofia Ria",
    Subjects: "Art, History, French, Health",
    Desc: "I'm a retired university professor with a passion for teaching! I have a strong background in history and I'm fluent in french. If you're interested in learning with me, book a session and get the help you desire with any of the subjects I specialize in.",
    ProfilePicture: "https://images.generated.photos/lkn7ax5_eDpiTrF-rQaDysMtcUifIGzORjJHsff1er0/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDU4OTk4LmpwZw.jpg",
    Address: {
      country: "Cuba",
      state: "Republic of Cuba",
      city: "Havana"
    }
  },
  {
    Id: 3,
    Slug: "tutor-richardharris",
    Title: "Richard Harris",
    Username: "richardharris",
    Email: "richardharris@hogwarts.uk",
    Name: "Richard Harris",
    Subjects: "Philosophy, Metaphysics, History",
    Desc: " It takes a great deal of bravery to stand up to your enemies, but a great deal more to stand up to your homework. Study with me and I can't gurantee success.",
    ProfilePicture: "https://images.generated.photos/BcskaTzLUGJ0domMn2hQzC8MsRHlsDzJukg8AgqiqTs/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjczODk2LmpwZw.jpg",
    Address: {
      country: "Ireland",
      state: "Republic of Ireland",
      city: "Limerick"
    }
  },
  {
    Id: 4,
    Slug: "tutor-mikelowery",
    Title: "Mike Lowery",
    Username: "mikelowery",
    Email: "bbmikelowery@gmail.com",
    Name: "Mike Lowery",
    Subjects: "Psychology, Health, Finance",
    Desc: "Focused on providing the best Tutoring to any student who comes my way! TutorU allows me to connect with all of you either remotely or in-person - either way I'll ensure you learn what you need to know!",
    ProfilePicture: "https://images.generated.photos/Neqpq1D_PhQb1QqL9RsY4rDXJcTSxuJRLmRwIoV0SeI/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzUzMjIzLmpwZw.jpg",
    Address: {
      country: "USA",
      state: "Florida",
      city: "Miami"
    }
  },
  {
    Id: 5,
    Slug: "tutor-whitneythompson",
    Title: "Whitney Thompson",
    Username: "whitneythompson",
    Email: "whitneythompson@hotmail.com",
    Name: "Whitney Thompson",
    Subjects: "Science, Math",
    Desc: "Dedicated to providing the best tutoring.",
    ProfilePicture: "https://images.generated.photos/VYL7d4Nq4XsKzE8eBUqIYFPlstgr8u8ByQ7u8pGlmT4/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzM3MzM2LmpwZw.jpg",
    Address: {
      country: "USA",
      state: "Texas",
      city: "Houston"
    }
  },
  {
    Id: 6,
    Slug: "tutor-lizzieoakerson",
    Title: "Lizze Oakerson",
    Username: "lizzieoakerson",
    Email: "lizzieoakerson@outlook.com",
    Name: "Lizzie Oakerson",
    Subjects: "Math, Programming, Engineering",
    Desc: "I would like to just call myself a 'doer,' but to narrow it down I say I'm an author, gardening tutor, lecturer, website owner, wild food tutor, magazine journalist, scriptwriter, and soon-to-be-father.",
    ProfilePicture: "https://images.generated.photos/EgeIsZICtvZYSfGDSvxudoIpmofEeQjO3SCkgO-mnqg/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTA2MTg4LmpwZw.jpg",
    Address: {
      country: "Canada",
      state: "Ontario",
      city: "Thunder Bay"
    }
  },
  {
    Id: 7,
    Slug: "tutor-albertpaddington",
    Title: "Albert Paddington",
    Username: "albertpaddington",
    Email: "moderndaymacbeth@outlook.com",
    Name: "Albert Paddington",
    Subjects: "English, Literature, French",
    Desc: "The kind of learning that meaningfully improves student writing can't happen once a week with a tutor, or once a quarter when it's time to write the big paper, or even every time the word although happens to come up in a student's homework.",
    ProfilePicture: "https://images.generated.photos/MNruB_GfAxPXKsGsawQd6gatWPG7agzvo_MLWP6adCQ/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTk1ODE5LmpwZw.jpg",
    Address: {
      country: "Canada",
      state: "Alberta",
      city: "Calgary"
    }
  },
  {
    Id: 8,
    Slug: "tutor-janisbuckweiser",
    Title: "Janis Buckweiser",
    Username: "janisbuckweiser",
    Email: "janisbuckweiser@gmail.com",
    Name: "Janis Buckweiser",
    Subjects: "Math, Science, History",
    Desc: "Figuring out how to leverage these new problem-solvers is a place where our state systems, districts, and schools have fumbled badly. TutorU has allowed me to teach all my previous and new students!",
    ProfilePicture: "https://images.generated.photos/JvpzqbgONM1-cArHkk5tNJsMixumF9CkNQZx6gxlZRc/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjI4MDE1LmpwZw.jpg",
    Address: {
      country: "USA",
      state: "North Carolina",
      city: "Midtown"
    }
  },
  {
    Id: 9,
    Slug: "tutor-marcuscook",
    Title: "Marcus Cook",
    Username: "marcuscook",
    Email: "marcuscook@outlook.com",
    Name: "Marcus Cook",
    Subjects: "Science, Biology, Phsyics",
    Desc: "Imagine that you are hiring a babysitter to watch your children for a few hours each afternoon, or a tutor to help them with homework, or even someone to teach you guitar or French.",
    ProfilePicture: "https://images.generated.photos/MFTwN9f6V-lF36GxUpVHEPxWFc0NVYYZGgCRChJFooU/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTMwNTA1LmpwZw.jpg",
    Address: {
      country: "Canada",
      state: "Ontario",
      city: "Toronto"
    }
  },
  {
    Id: 10,
    Slug: "tutor-emilythatcher",
    Title: "Emily Thatcher",
    Username: "emilythatcher",
    Email: "emilysnatcher@hotmail.com",
    Name: "Emily Thatcher",
    Subjects: "French, English",
    Desc: "From Paris to Quebec to Monaco to Haiti, I've learned every variation of french traveling around the world and english from the top schools in the United Kingdom, join me to learn or get help learning about French and/or English!",
    ProfilePicture: "https://images.generated.photos/6-KxDQq5DqNa2UY7dHziMllcOSiidQte-MZS2PYz8O0/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTk1MTc5LmpwZw.jpg",
    Address: {
      country: "Remote",
      state: "N/A",
      city: "N/A"
    }
  },
  {
    Id: 11,
    Slug: "tutor-jennylam",
    Title: "Jenny Lam",
    Username: "jennylam",
    Email: "jlamma@outlook.com",
    Name: "Jenny Lam",
    Subjects: "Math",
    Desc: "I've studied Math for over 9 years and have a Masters in Mathematics. I can assure you, you'll learn all you need for your assignments or upcoming tests with me!",
    ProfilePicture: "https://images.generated.photos/FhvxK5iMjX-6kYLQpriVpOKL_9SoPVoF7_0YBNk0hXM/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjU2MTAwLmpwZw.jpg",
    Address: {
      country: "USA",
      state: "New York",
      city: "New York City"
    }
  },
  {
    Id: 12,
    Slug: "tutor-kateducksworth",
    Title: "Kate Ducksworth",
    Username: "kateducksworth",
    Email: "kateduck@outlook.com",
    Name: "Kate Ducksworth",
    Subjects: "Business",
    Desc: "I've started my career as an HR Representative and made my way to CEO. I have a Masters in Business from Yale and love to guide others. Book me to learn many new things and or have your questions answered by a professional!",
    ProfilePicture: "https://images.generated.photos/VCdEKEsxW9ywHFhxalh2oDlEdWvWjylZPBWEtPdWphI/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzE5MTM3LmpwZw.jpg",
    Address: {
      country: "USA",
      state: "Ohio",
      city: "Commontown"
    }
  },
  {
    Id: 13,
    Slug: "tutor-kentlockwood",
    Title: "Kent Lockwood",
    Username: "kentlockwood",
    Email: "kentlockwood@gmail.com",
    Name: "Kent Lockwood",
    Subjects: "Sports, Health, Science",
    Desc: "Meanwhile, they're laying off highly experienced teachers. In the meantime, I worked as a private tutor for affluent students—including one who applied for Teach for America because he thought it would look good on his business-school application.",
    ProfilePicture: "https://images.generated.photos/4u8FhpcvVjBRam5itGKvxcnOmElrFX__y47KH2GDzGY/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjgwOTI4LmpwZw.jpg",
    Address: {
      country: "Remote",
      state: "N/A",
      city: "N/A"
    }
  },
  {
    Id: 14,
    Slug: "tutor-davidstone",
    Title: "David Stone",
    Username: "davidstone",
    Email: "dave111@gmail.com",
    Name: "David Stone",
    Subjects: "Engineering, Aerospace Engineering",
    Desc: "I used to work in the United State Air Force. Worked my way up to Space Force. I was very close to becoming an astronaut and going into space but I decided to continue my reasearch from earth.",
    ProfilePicture: "https://images.generated.photos/mkF0GEnnL50J12tdfy1B2d-Djt-OaXTG-lrAErq3FB0/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTI1MzUyLmpwZw.jpg",
    Address: {
      country: "USA",
      state: "Kansas",
      city: "Kansas City"
    }
  },
  {
    Id: 15,
    Slug: "tutor-alexchao",
    Title: "Alex Chao",
    Username: "alexchao",
    Email: "alexchao@outlook.com",
    Name: "Alex Chao",
    Subjects: "Math, Video Game Programming",
    Desc: "Expect a very calm and well guided tutoring experience. Here to provide with the upmost of my abilities. All love, A. Chao.",
    ProfilePicture: "https://images.generated.photos/k6bleifl2YburN35aifjZS25GvXuKM2JZ-WdEXgRjQI/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjAyMjU1LmpwZw.jpg",
    Address: {
      country: "Canada",
      state: "Ontario",
      city: "Ottawa"
    }
  }
];

export default data;