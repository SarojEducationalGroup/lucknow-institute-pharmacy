import { motion } from "framer-motion";
import { FaTrophy, FaUniversity, FaBriefcase, FaRupeeSign, FaFlask, FaHospital } from "react-icons/fa";

const placements = [
  {
    id: 1,
    name: "Rahul Sharma",
    company: "Sun Pharmaceutical",
    package: "6.5 LPA",
    role: "Senior Research Scientist",
    photo: "/placed-student/2.png",
  },
  {
    id: 2,
    name: "Priya Patel",
    company: "Apollo Hospitals",
    package: "5.25 LPA",
    role: "Clinical Research Manager",
    photo: "/placed-student/4.png",
  },
  {
    id: 3,
    name: "Amit Singh",
    company: "Dr. Reddy's",
    package: "7.5 LPA",
    role: "Pharmaceutical Analyst",
    photo: "/placed-student/3.png",
  },
  {
    id: 4,
    name: "Neha Gupta",
    company: "Fortis Healthcare",
    package: "8 LPA",
    role: "Medical Affairs Specialist",
    photo: "/placed-student/1.png",
  },
  
];

const StatsCard = ({ value, label, icon }) => (
  <motion.div 
    whileHover={{ scale: 1.05 }}
    className="bg-white p-6 rounded-lg shadow-md text-center"
  >
    <div className="text-4xl text-blue-600 mb-2 flex justify-center">{icon}</div>
    <h3 className="text-3xl font-bold text-gray-800">{value}</h3>
    <p className="text-gray-600 mt-2">{label}</p>
  </motion.div>
);

export default function StudentPlacementSlider() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Students Placed in <span className="text-blue-600">Pharma & Healthcare</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our successful alumni working at leading pharmaceutical companies and hospitals
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <StatsCard value="300+" label="Students Placed" icon={<FaUniversity />} />
          <StatsCard value="25+" label="Top Organizations" icon={<FaBriefcase />} />
          <StatsCard value="18 LPA" label="Highest Package" icon={<FaTrophy />} />
          <StatsCard value="8.5 LPA" label="Average Package" icon={<FaRupeeSign />} />
        </div>

        {/* Student Placements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {placements.map((student) => (
            <motion.div
              key={student.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 sm:h-64 overflow-hidden">
                <img
                  src={student.photo}
                  alt={student.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white">{student.name}</h3>
                  <p className="text-blue-300">{student.role}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-gray-600">{student.company.includes('Hospital') ? 'Hospital' : 'Company'}</span>
                  <span className="font-semibold">{student.company}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Package</span>
                  <span className="text-green-600 font-bold text-lg">
                    ₹{student.package}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        
      </div>
    </section>
  );
}