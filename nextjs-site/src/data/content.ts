// Static content extracted from Gatsby markdown files
// This serves as fallback/default content when Contentful is not configured

export const bannerImages = {
  home: "/cms-assets/coverpoppykissingfrankie-min.jpeg",
  about: "/cms-assets/teacherpoppy-hands-about-banner-min.jpg",
  classes: "/cms-assets/banner-poppy-frankie-min.jpeg",
  timetable: "/cms-assets/teacher-jumping-student-copying-min.jpeg",
  information: "/cms-assets/teacher-arms-out-min.jpeg",
  contact: "/cms-assets/3-boys-running-to-beach-min.jpeg",
  signup: "/cms-assets/aquasky-holding-2-min.jpeg",
};

export const homepage = {
  bannerImage: bannerImages.home,
  showNotificationBar: false,
  notificationContent:
    '<a href="/sign-up"><strong>NEW Term 1</strong> starting on the 9th of February 2024 - Book now for a <strong>FREE Trial!</strong></a>',
  introductionTitle: "Welcome to Beach Ballerinas",
  introductionDescription:
    "We offer ballet and dance classes at the heart of Bondi Beach. Our quality program for children from 18 months and up and allows for babies, toddlers and young children to reach their potential whilst developing co-ordination and confidence. We have qualified Royal Academy of Dance teachers to provide ballet and jazz classes at the highest standard. We want to give children the opportunity to experience the wonderful world of dance. Our passion is to share the LOVE of dance, in a nurturing environment that makes each class FUN!!!",
  locationImage: "/cms-assets/bondi-beach.jpg",
  locationTitle: "Located at the Beautiful Bondi Beach",
  locationDescription:
    "Just a few minutes walk from Bondi Beach are our amazing dance studios. We have beautiful studios with mirrors and quality floorboards that create a magical touch from the moment you step in.",
  bookingTitle: "Classes Starting Term 1!",
  testimonials: [
    {
      name: "Mel",
      occupation: "Maroubra Mum",
      text: "Miss Tamar was my daughters first ever dance teacher. My daughter would sometimes get a little nervous and anxious before class, and Miss Tamar gently helped her through to the point that she never wanted to come home!! Very hard to find this type of teacher these days. Thank you Miss Tamar my little girl has flourished into a gorgeous ballerina with your guidance x",
    },
    {
      name: "Rachel Crompton",
      occupation: "Pilates Director, Elixir Health Clubs",
      text: "My daughter was five when she started dancing with Tamar in 2012. She built my daughters confidence especially in the first few years, and importantly, stoked her passion for dancing. Tamar's dedication, enthusiasm, kind nature, passion and professionalism are to be commended. The young dancers she teaches respond in a positive manner due to her positive energy and her caring and nurturing manner.",
    },
    {
      name: "Jade",
      occupation: "Bondi Mum",
      text: "Ms Tamar has been excellent with Sophie and extremely supportive. This has resulted in Sophie feeling confident at ballet during a very difficult time in her life where she has struggled in other arenas. I wanted to let you know because it means the world to me and to Sophie to have such an engaged and caring ballet teacher.",
    },
  ],
};

export const danceClasses = [
  {
    order: 1,
    title: "Ma Pa and Bubs",
    subtitle: "Bondi Beach",
    description:
      "Mums and Dads want to dance too! Perfect class if you have a little one not quite ready to dance yet solo. This class, is a magical time of bonding that you can share with your little one creating everlasting memories.\n\nYou and your little one can learn dancing together, trying out new moves and testing your performance skills. Listen to the music and let little one express what they feel.\n\nYou don't need to have any previous ballet or dance skills – you just need to be ready to have a fabulous time with your dancer. Be ready to dance, move, sing, play and have plenty of fun – just like your little person!",
    imageUrl: "/cms-assets/poppy-and-my-legg-min.jpg",
    imageAlt: "Ma Pa and Bubs dance class",
  },
  {
    order: 2,
    title: "BB Toddlers",
    subtitle: "Bondi Beach",
    description:
      "Beach Ballerinas hold classes for 3-5 year olds that are a beautiful introduction to the wonderful world of dance. We use the Oz Tots Program that has been established for over three decades and proven to be most affective for toddlers and dance!\n\n• Introducing creative and educational group tasks for literacy and numeracy\n• Enjoy passive stretching, learning body parts, introducing rhythm through clapping, beating and playing musical instruments to music\n• Develop gross motor skills such as skipping, galloping, jumping with props\n• Sing to fun age appropriate songs\n• Working towards our FUN open day for parents at the end of each Term",
    imageUrl: "/cms-assets/frankie-serios-solo-min.jpg",
    imageAlt: "BB Toddlers dance class",
  },
  {
    order: 3,
    title: "Ballet",
    subtitle: "Bondi Beach",
    description:
      "Beach Ballerinas Primary Classical Ballet Programme introduces the Royal Academy of Dance syllabus and continues the development of ballet technique as new steps are introduced to challenge our young dancers. Our classes are always kept fun and creative keeping your dancer in love with ballet.\n\nThis class is available for Kindergarten and up and is also offered in combination with Jazz (30 mins Ballet and 30 mins Jazz).\n\nAims of the syllabus:\n• Continue to improve motor development skills and to promote self-expression through movement. Self esteem and confidence are developed in an environment that enables children to become independent and co-operative learners.\n• The program encourages creativity by engaging students in planning exercises set to musical pieces and to express emotion through storytelling.",
    imageUrl: "/cms-assets/pre-primary-ballet-pic-min.jpg",
    imageAlt: "Ballet dance class",
  },
  {
    order: 4,
    title: "Jazz",
    subtitle: "Bondi Beach",
    description:
      "Beach Ballerinas jazz class dancers learn funky age appropriate routines with a technical focus. Jazz is a great free movement class for dancers after a ballet class and builds dancer presence, awareness and confidence.\n\nThis class is available for Kindergarten and up and is also offered in combination with Ballet (30 mins Ballet and 30 mins Jazz).\n\nThe progression will accelerate with this age group, as they are a little older and more aware of their bodies. Strength and stretching exercises are formally introduced in this level, which assists with posture and dance technique.",
    imageUrl: "/cms-assets/boys-stretched-arms-min.jpg",
    imageAlt: "Jazz dance class",
  },
  {
    order: 6,
    title: "Adult Beginner Ballet",
    subtitle: "Bondi Beach",
    description:
      "For all the adults who want to learn the basics of ballet in a casual manner. A fun class, learning basic technique from the foundations of ballet with a combination of a barre workout.\n\nClassical ballet is characterised by a standard vocabulary of steps, poses, and graceful movements - including pointed feet, rising, jumping, stretching and spinning. It is strengthening, disciplined and stylised.\n\nThe class starts with exercises at the barre followed by work in the centre.\n\nThere is no such thing as being 'too old' - with fitness and technique one can do miracles!",
    imageUrl: "/cms-assets/tamar-reachibg-up-min.jpg",
    imageAlt: "Adult Beginner Ballet class",
  },
  {
    order: 7,
    title: "Hip Hop",
    subtitle: "Bondi Beach",
    description:
      "Get ready to groove and move in our Kids Hip Hop classes! In just 45 minutes, young dancers will explore the exciting world of hip hop, learning cool moves, building confidence, and having a blast with friends. Join us for a dynamic dance experience that's as fun as it is energetic!",
    imageUrl: "/cms-assets/img_5595.jpeg",
    imageAlt: "Hip Hop dance class",
  },
];

export const staff = [
  {
    name: "Tamar Arzoumalian",
    description:
      "Miss Tamar is a qualified Royal Academy of Dance Ballet Teacher.\n\nShe trained at The Conlan College where she was a full time student. She has been teaching 3 to 18 year olds for over 10 years and is in her 14th year teaching in the Eastern Suburbs.\n\nShe has taught students whom are now successfully in The Australian Ballet and who are also in Germany, Switzerland, Czech Republic, Holland and Norway training and pursuing their dreams to become professional dancers world wide.\n\nTamar is very passionate and truly loves teaching children the art of Dance and wants to give the children a fun and wonderful experience.\n\nHer expertise and especially her love, encouragement and empathy for our valuable children. She just wants to give children the opportunity to Dance and have FUN !!!",
    photoUrl: "/cms-assets/tamar-bio-1-min.jpg",
    photoAlt: "Tamar Arzoumalian",
  },
];

export const studios = [
  {
    title: "Bondi Beach",
    address: "G13/ 180-186 Campbell Parade, Bondi Beach, 2026",
    description:
      "A beautiful studio located right in the heart of Bondi.\n\nFacilities include:\n• New floorboards\n• Smart lights\n• Mirrors and barre\n• Change room",
    photoUrl: "/cms-assets/289a27ed-0f62-4630-9a64-e799314e30f2.jpg",
    photoAlt: "Bondi Beach Studio",
  },
];

export const values = {
  title: "Attitude & Etiquette",
  description:
    "At Beach Ballerinas we create a loving and nurturing atmosphere when sharing the love of dance to each child. This is present from the moment little dancers take a step into the studio. These etiquettes can all help make the dance studio a fun and safe learning environment for everyone…",
  valuesList: [
    "Leave dangling or sharp jewellery at home or in your bag",
    "Leave food and drinks (unless closed water bottle) out of the dance studio",
    "Please use the dressing room provided to get changed into dance clothes",
    "Try be on time and ready to go at least 5 mins early for each lesson.",
    "Always be well groomed; neat and tidy hair off the face and clean uniform",
    "Parents please take children to the bathroom before class",
    "Never wear dance shoes outside or wear street shoes inside the studio",
    'Be respectful to others, allow them the same opportunity you have to learn and remember "be kind to others"',
    "Respect the studio space by keeping it clean and neat. Place your things in a neat and appropriate space provided",
  ],
};

export const uniformInfo = {
  title: "Uniform",
  description:
    "With many years of working with this age group and trying out different options of attire, various outfits have caused many distractions. We have the most gorgeous uniforms in beautiful colours suited for our classes.\n\nBeach Ballerinas is now part of the Bloch Loyalty Program. Please visit any Bloch store to pick up a Loyalty Card that gives you access to a special discount every time you shop at Bloch.\n\nOur closest store is the Bondi store located at Shop 2, 25-33 Bronte Road, Bondi Junction.",
  uniformCards: [
    {
      title: "Girls Toddlers",
      description:
        "• Bloch Tutu: Baby Pink/Blue or White\n• Hair neatly tied up, off the face\n• Pink Ballet socks and Pink Ballet shoes",
      photoUrl: "/cms-assets/poppy-in-uniform-min.jpg",
      photoAlt: "Girls Toddlers Uniform",
    },
    {
      title: "Girls Kindy & Up",
      description:
        "• Bloch Sleeveless Leotard Candy Pink\n• Bloch RAD skirt Candy Pink\n• Pink Ballet socks and Pink Ballet shoes\n• Hair neatly tied up in ballet bun, off the face\n• Jazz: Black bike shorts over the top of leotard",
      photoUrl: "/cms-assets/2-girls-edited-39-pm-min.jpg",
      photoAlt: "Girls Kindy & Up Uniform",
    },
    {
      title: "Boys",
      description:
        "• White t-shirt\n• Black/ Navy/ Blue shorts\n• Runners or Black ballet shoes",
      photoUrl: "/cms-assets/boys-stretched-arms-min.jpg",
      photoAlt: "Boys Uniform",
    },
  ],
};

export const termsAndConditions = {
  title: "Terms and Conditions",
  content: `#### Please read these Terms, our Privacy Policy and any other terms referenced in this document carefully. We hope you're sitting comfortably and listening to some great music.

## Fees

• All fees are due within 14 days of the commencement of each Term.
• Failure to pay within this period will incur a 20% late fee.
• 10% sibling discount applies only to one child of the lesser value.
• If fees are still outstanding by week 5 of the Term, students will be asked to sit and watch class until full payment is received.
• All fees are non refundable. If your child's fees continue to remain outstanding your account will be forwarded to our debt collection agency for further action. All agency costs will be added to your account.
• If your child misses classes they are more than welcome to make up classes providing there is a vacancy and they have spoken to Beach Ballerinas staff member. Classes can only be made up within the same Term.
• If you are unable to pay fees within the allocated time frame please contact us to make arrangements.
• Fees can be paid via Direct Deposit, Cash or through Class Manager
• Account Details: Name: Tamar Arzoumalian BSB: 112-879 ACC# 416097213

## Other Conditions

• All students must be appropriately groomed for class and in the correct uniform. This is located on our Uniform List.
• Classes are closed to parents/family unless enrolled in Ma Pa and Bubs where only one parent is to participate. We have an open week at the end of each Term where you can view your child's class. Do not enter a studio unless you have spoken to a Beach Ballerina staff member as it causes distraction to the students.
• Teachers are only available to supervise your children in the allocated class time inside the studio. We are not responsible for your child outside class times.
• All students participate in dance activities at their own risk. Beach Ballerinas teachers are not responsible for any injury or accident that may occur during class. Beach Ballerinas strive to provide a safe and caring atmosphere.
• Physical teaching contact between teachers and students may be necessary at times.
• All students may be photographed and videoed for use on any advertising material and/or concert DVD
• Beach Ballerinas has a very high NO Zero Tolerance bullying Policy, which includes social media, verbal or physical. Beach Ballerinas also has in place a zero tolerance to publicly discrediting Beach Ballerinas or any teachers, students, parents and office workers on any public forum. Instant dismissal from Beach Ballerinas, and legal action will commence.

## Disclaimer

• Participation in Beach Ballerinas can involve the risk of personal injury: While Beach Ballerinas takes all reasonable care in the conduct of its classes, it accepts no responsibility for injury or loss caused during classes or whilst participants are at or near the dance studio.
• You are responsible for ensuring that your child is physically and medically fit for Beach Ballerinas and during their time at Beach Ballerinas they must take care of their own personal safety at all times.

## Privacy Policy

Beach Ballerinas is committed to protecting the privacy of our clients information. The information we collect is used to facilitate services that we provide to you. We value your privacy and will take all necessary steps to protect it.

We collect personal data through a registration process. We will not sell, transfer, assign or rent your information to any third party without your permission, unless required by law.

Your personal information may be used by Beach Ballerinas to forward you information by way of regular bulletins or to contact you by telephone or mail.

By visiting our website, you expressly consent to the collection and use by Beach Ballerinas of personal information according to this policy.`,
};

export const programs = [
  {
    order: 1,
    title: "Galilee Catholic Primary School",
    location: "Galilee Catholic Primary School, 60B Blair Street, North Bondi, NSW 2026",
    description:
      "No dance experience needed, open to all ages. Just bring lots of energy and happy faces.\n\n• 40 minute Jazz class based on Fun, Energetic moving exercises to age appropriate music\n• Improve gross motor development skills and self esteem\n• Great movement class for dancers to build dancer presence, awareness and confidence\n• Keeping kids active in a FUN and CASUAL environment\n• Learn a Funky routine- giving dancers a chance to express themselves\n• 8 Sessions of FUN !!\n• Active Kids Vouchers are accepted (Please email before booking with Voucher and Childs Name and DOB)\n\n**Enquire for more details**",
    imageUrl: "/cms-assets/galilee-dance-classes.png",
    imageAlt: "Galilee Catholic Primary School Dance Program",
  },
];

export const timetableClasses = [
  {
    title: "Ma Pa & Bubs",
    classTimes: [
      { day: "Friday", startTime: "09:00 AM", endTime: "09:30 AM", isTbc: false },
    ],
  },
  {
    title: "3 & 4 Yr olds",
    classTimes: [
      { day: "Tuesday", startTime: "09:30 AM", endTime: "10:15 AM", isTbc: false },
    ],
  },
  {
    title: "3 Year Olds",
    classTimes: [
      { day: "Friday", startTime: "09:30 AM", endTime: "10:15 AM", isTbc: false },
      { day: "Saturday", startTime: "10:30 AM", endTime: "11:15 AM", isTbc: false },
    ],
  },
  {
    title: "4 Year Olds",
    classTimes: [
      { day: "Friday", startTime: "10:30 AM", endTime: "11:15 AM", isTbc: false },
      { day: "Saturday", startTime: "11:15 AM", endTime: "12:00 PM", isTbc: false },
    ],
  },
  {
    title: "Acro Kindy & Yr 1",
    classTimes: [
      { day: "Tuesday", startTime: "03:45 PM", endTime: "04:30 PM", isTbc: false },
    ],
  },
  {
    title: "Acro Yr 2 & up",
    classTimes: [
      { day: "Tuesday", startTime: "04:30 PM", endTime: "05:15 PM", isTbc: false },
    ],
  },
  {
    title: "Primary Ballet (Yr 1)",
    classTimes: [
      { day: "Wednesday", startTime: "03:30 PM", endTime: "04:15 PM", isTbc: false },
      { day: "Saturday", startTime: "12:15 PM", endTime: "01:15 PM", isTbc: false },
    ],
  },
  {
    title: "Primary Jazz",
    classTimes: [
      { day: "Wednesday", startTime: "04:15 PM", endTime: "05:00 PM", isTbc: false },
    ],
  },
  {
    title: "Grade 1 Ballet (Yr 2)",
    classTimes: [
      { day: "Wednesday", startTime: "05:00 PM", endTime: "06:00 PM", isTbc: false },
      { day: "Thursday", startTime: "04:30 PM", endTime: "05:30 PM", isTbc: false },
    ],
  },
  {
    title: "Kindy/ Yr 1 Combo",
    classTimes: [
      { day: "Thursday", startTime: "03:30 PM", endTime: "04:30 PM", isTbc: false },
    ],
  },
  {
    title: "Jazz Yr 2 & 3",
    classTimes: [
      { day: "Thursday", startTime: "05:30 PM", endTime: "06:15 PM", isTbc: false },
    ],
  },
];

export const termDates = {
  year: 2024,
  termOne: { startDate: "8 February", endDate: "12 April" },
  termTwo: { startDate: "29 April", endDate: "7 July" },
  termThree: { startDate: "21 July", endDate: "27 September" },
  termFour: { startDate: "13 October", endDate: "6 December" },
};
