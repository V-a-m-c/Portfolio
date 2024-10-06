import React from 'react';

const Education = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-8 text-yellow-400">My Education</h1>
        <p className="text-lg text-gray-300 mb-12">
          Here’s a summary of my academic journey, qualifications, and experiences that have shaped me.
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="relative border-l border-gray-600 pl-8">
          {/* Timeline Item - Bachelor of Technology */}
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-400 rounded-full h-8 w-8 flex items-center justify-center text-gray-900 font-bold">
                1
              </div>
              <h2 className="ml-4 text-3xl font-semibold">Bachelor of Technology, Computer Science</h2>
            </div>
            <div className="pl-12">
              <p className="text-gray-400 mb-2">VIT-AP University, Amaravati</p>
              <p className="text-gray-400 mb-2">2021 - 2025</p>
              <p className="text-gray-400">
                Pursuing a comprehensive program in Computer Science, gaining knowledge in web development, data structures, and cloud technologies.
              </p>
            </div>
          </div>

          {/* Timeline Item - Intermediate Education */}
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-400 rounded-full h-8 w-8 flex items-center justify-center text-gray-900 font-bold">
                2
              </div>
              <h2 className="ml-4 text-3xl font-semibold">Intermediate Education</h2>
            </div>
            <div className="pl-12">
              <p className="text-gray-400 mb-2">Tirumala Junior College, Visakhapatnam</p>
              <p className="text-gray-400 mb-2">2019 - 2021</p>
              <p className="text-gray-400">
                Focused on MPC (Maths, Physics, Chemistry) stream, developing strong problem-solving skills.
              </p>
            </div>
          </div>

          {/* Timeline Item - High School Education */}
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-400 rounded-full h-8 w-8 flex items-center justify-center text-gray-900 font-bold">
                3
              </div>
              <h2 className="ml-4 text-3xl font-semibold">High School Education</h2>
            </div>
            <div className="pl-12">
              <p className="text-gray-400 mb-2">Narayana Group of Schools, Palasa</p>
              <p className="text-gray-400 mb-2">2018 - 2019</p>
              <p className="text-gray-400">
                Completed high school with a focus on academic excellence and participation in extracurricular activities.
              </p>
            </div>
          </div>

          {/* Timeline Item - Certifications */}
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-400 rounded-full h-8 w-8 flex items-center justify-center text-gray-900 font-bold">
                4
              </div>
              <h2 className="ml-4 text-3xl font-semibold">Certifications</h2>
            </div>
            <div className="pl-12">
              {/* Certificate - AWS Certified Cloud Practitioner */}
              <div className="mb-8">
                <p className="text-gray-400 mb-2">AWS Certified Cloud Practitioner</p>
                <p className="text-gray-400 mb-2">2024</p>
                <p className="text-gray-400">
                  Gained foundational knowledge in cloud computing and AWS services, preparing for cloud-based projects.
                </p>
              </div>
              {/* Certificate - DSA Microlearning Course */}
              <div className="mb-8">
                <p className="text-gray-400 mb-2">Completed Microlearning Course in Certification in DSA</p>
                <p className="text-gray-400">
                  Developed expertise in data structures and algorithms, enhancing problem-solving skills.
                </p>
              </div>
              {/* Certificate - IBM Enterprise Design Thinking Practitioner */}
              <div className="mb-8">
                <p className="text-gray-400 mb-2">IBM Certified Enterprise Design Thinking Practitioner, Co-Creator</p>
                <p className="text-gray-400">
                  Earned certification in enterprise design thinking, focusing on user-centered design and collaboration.
                </p>
              </div>
              {/* Certificate - Internship */}
              <div className="mb-8">
                <p className="text-gray-400 mb-2">Certificate of Internship in Computer Networks & Information Security</p>
                <p className="text-gray-400 mb-2">2024</p>
                <p className="text-gray-400">
                  Successfully completed a 45days internship, gaining hands-on experience with network security tools and techniques.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
