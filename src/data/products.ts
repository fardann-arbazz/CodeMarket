import LoginLMS from "../assets/lms-assets/login.svg";
import AdminDashboard from "../assets/lms-assets/admin-dashboard.svg";
import GuruDashboard from "../assets/lms-assets/guru-dashboard.svg";
import CreateKELAS from "../assets/lms-assets/create-kelas.svg";
import JoinClass from "../assets/lms-assets/join-class.svg";

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  rating: number;
  image: string[];
  video?: string;
  features: string[];
  downloads: number;
  stars: number;
  isFeatured?: boolean;

  specifications?: string[];
  description_tabs?: string;
  reviews?: { name: string; comment: string; rating: number }[];
  faqs?: { question: string; answer: string }[];
}

export const products: Product[] = [
  {
    id: 1,
    title: "Edu Core LMS",
    description:
      "Edu Core is a modern Learning Management System (LMS) built with Laravel Inertia, designed specifically for remote learning in schools, educational institutions, and course providers. It offers powerful, flexible features to streamline digital education.",
    price: 22,
    category: "Laravel Inertia",
    rating: 4.9,
    video: "https://youtu.be/0xIYc9DPPzM",
    image: [LoginLMS, AdminDashboard, GuruDashboard, CreateKELAS, JoinClass],
    features: [
      "Built with Laravel + Inertia + React",
      "Dedicated Dashboards for Admins, Teachers, and Students",
      "Class & Assignment Management",
      "Join Classes with Unique Code",
      "Modular Component-based UI",
      "Fully Responsive Design",
      "Multi-role User Access Control",
    ],
    downloads: 1243,
    stars: 342,
    isFeatured: true,
    specifications: [
      "🔧 Built with Laravel 12 and Inertia.js (React version available)",
      "🎨 Fully styled with Tailwind CSS — responsive",
      "🛠️ Shadcn library Tailwind CSS",
      "📁 Modular file structure for scalable development",
      "🧑‍🏫 Roles: Admin, Teacher, Student with permission-based access",
      "🏫 Classrooms: Create, edit, and manage virtual classes",
      "📎 Assignment System: Upload tasks, collect submissions, give grades",
      "📬 Real-time Join via Class Code",
      "📈 Dashboard analytics for admin and teachers",
      "💬 Comment & Announcement support per class",
      "📱 Mobile-responsive UI (tested on iOS & Android)",
      "💡 Easy deployment on shared or VPS hosting",
      "🔐 Secure login with Laravel Sanctum support",
    ],

    description_tabs: `
Edu Core LMS is a Laravel-based Learning Management System designed to support modern remote education. Whether you're a school running online classes, a tutoring center, or a training provider, Edu Core makes it easy to create, manage, and monitor digital learning activities.

The system includes several core modules:
- Admin Panel to manage users, classes, reports, and global settings from a single interface.
- Teacher Dashboard to create classes, share materials, assign and review assignments.
- Student Interface where learners can join classes via a code, download study materials, submit assignments, and participate in discussions.
- Classroom Tools including timelines, announcements, assignment submissions, grading systems, and comment threads.

Edu Core is developer-friendly, built using Laravel and Inertia.js, with a modular architecture, clean code, and Tailwind CSS styling out of the box. It is ideal for development teams looking to customize or expand their LMS.

The package includes:
- Full Laravel source code
- Authentication system with user roles: admin, teacher, and student
- Ready-to-use dashboard templates
- Sample data for classes, assignments, and users
- Mobile-first design
- Complete documentation for installation and deployment

Edu Core is suitable for:
- Online learning platforms for schools and universities
- E-learning portals for foundations or training institutions
- Internal corporate training systems
- Tutoring centers or digital course providers

Licensing includes unlimited use for personal and commercial projects.

Purchasing includes 4-month email support and lifetime updates.
`,
  },
];
