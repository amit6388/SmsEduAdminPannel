import React, { useEffect, useState } from "react";
import Homepage from "./Homepage";
import Navigation from "./Components/Navigation";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import About from "./Pages/About";
import Courses from "./Pages/Courses";
import Contact from "./Pages/Contact";
import Blogs from "./Pages/Blogs";

// Admin Dashboard Import
import AdminSidebar from "./Components/AdminSidebar";
import Dashboard from "./Dashboard/AdminDashboard";
import Students from "./Dashboard/students/Students";
import Enrollment from "./Dashboard/Enrollment";
import AdminProfile from "./Dashboard/AdminProfile";
import AdminSettings from "./Dashboard/AdminSettings";
import AddStudentForm from "./Dashboard/students/AddStudentForm";
import AddInstructor from "./Dashboard/instructors/AddInstructor";
import InstructorList from "./Dashboard/instructors/InstructorList";
import EditInstructor from "./Dashboard/instructors/EditInstructor";
import CoursesList from "./Dashboard/courses/CourseList";
import AddCourse from "./Dashboard/courses/AddCourse";
import Enquiries from "./Dashboard/enquiries/Enquiries";
import Orders from "./Dashboard/Orders";
import Categories from "./Dashboard/courses/Categories";
import EditStudent from "./Dashboard/students/EditStudent";
import EditEnquiry from "./Dashboard/enquiries/EditEnquiry";
import Expenses from "./Dashboard/expenses/Expenses";
import Income from "./Dashboard/income/Income";
import BookList from "./Dashboard/library/BookList";

// Student Dashboard Import
import StudentSidebar from "./Components/StudentSidebar";
import StudentDashboard from "./studentDashboard/StudentDashboard";
import Footer from "./Components/Footer";
import StudentTeachers from "./studentDashboard/StudentTeachers";
import StudentAcademics from "./studentDashboard/academics/StudentAcademics";
import StudentMarks from "./studentDashboard/StudentMarks";
import StudentProfile from "./studentDashboard/profile/StudentProfile";
import StudentLibrary from "./studentDashboard/library/StudentLibrary";
import StudentPayments from "./studentDashboard/StudentPayments";
import CourseContent from "./studentDashboard/academics/CourseContent";
import StudentQueries from "./studentDashboard/StudentQueries";
import StudentAssignments from "./studentDashboard/StudentAssignments";

// InStructor Routes
import InstructorSidebar from "./Components/InstructorSidebar";
import InstructorDashboard from "./InstructorDashboard/InstructorDashboard";
import InstructorStudents from "./InstructorDashboard/InstructorStudents/InstructorStudents";
import InstructorCourseList from "./InstructorDashboard/instructor-courses/InstructorCourseList";
import InstructorFees from "./InstructorDashboard/InstructorFees/InstructorFees";
import ScheduleClasses from "./InstructorDashboard/scheduleClasses/ScheduleClasses";
import InstructorResultList from "./InstructorDashboard/instructor-result/InstructorResultList";
import InstructorAssignments from "./InstructorDashboard/InstructorAssignments/InstructorAssignments";
import InstructorEvents from "./InstructorDashboard/InstructorEvents/InstructorEvents";

// Authentication Imports
import LoginStudent from "./authentication/LoginStudent";
import StudentProtected from "./studentDashboard/StudentProtected";

const App = () => {
  const location = useLocation();
  const [isAdmin, setIsAdmin] = useState(false);
  const [isStudent, setIsStudent] = useState(false);
  const [isInstructor, setIsInstructor] = useState(false);
  const [auth, setAuth] = useState();

  useEffect(() => {
    updateAuth();
  });

  const updateAuth = () => {
    setAuth(JSON.parse(window.localStorage.getItem("auth")));
  };

  useEffect(() => {
    setIsAdmin(location.pathname.startsWith("/admin"));
    setIsStudent(location.pathname.startsWith("/student"));
    setIsInstructor(location.pathname.startsWith("/instructor"));
  }, [location.pathname]);

  return (
    <>
      {isAdmin || isStudent || isInstructor ? "" : <Navigation />}

      <Routes>
        <Route path="/" exact={true} element={<Homepage />} />
        <Route path="/about" exact={true} element={<About />} />
        <Route path="/courses" exact={true} element={<Courses />} />
        <Route path="/contact" exact={true} element={<Contact />} />
        <Route path="/blogs" exact={true} element={<Blogs />} />

        {/* Auth Routes */}
        <Route
          path="/login-student"
          exact={true}
          element={<LoginStudent updateAuth={updateAuth} />}
        />
      </Routes>

      {/* Student Dashboard Routes */}
      {isStudent && (
        <StudentSidebar updateAuth={updateAuth} auth={auth}>
          <Routes>
            <Route
              path="/student/dashboard"
              exact={true}
              element={
                <StudentProtected auth={auth} Component={StudentDashboard} />
              }
            />
            <Route
              path="/student/teachers"
              exact={true}
              element={
                <StudentProtected auth={auth} Component={StudentTeachers} />
              }
            />
            <Route
              path="/student/academic"
              exact={true}
              element={
                <StudentProtected auth={auth} Component={StudentAcademics} />
              }
            />
            <Route
              path="/student/academic/course-contents"
              exact={true}
              element={
                <StudentProtected auth={auth} Component={CourseContent} />
              }
            />
            <Route
              path="/student/profile"
              exact={true}
              element={
                <StudentProtected auth={auth} Component={StudentProfile} />
              }
            />
            <Route
              path="/student/marks"
              exact={true}
              element={
                <StudentProtected auth={auth} Component={StudentMarks} />
              }
            />
            <Route
              path="/student/library"
              exact={true}
              element={
                <StudentProtected auth={auth} Component={StudentLibrary} />
              }
            />
            <Route
              path="/student/queries"
              exact={true}
              element={
                <StudentProtected auth={auth} Component={StudentQueries} />
              }
            />
            <Route
              path="/student/assignments"
              exact={true}
              element={
                <StudentProtected auth={auth} Component={StudentAssignments} />
              }
            />
            <Route
              path="/student/payments"
              exact={true}
              element={
                <StudentProtected auth={auth} Component={StudentPayments} />
              }
            />
          </Routes>
        </StudentSidebar>
      )}

      {/* Admin Dashboard Routes */}
      {isAdmin && (
        <AdminSidebar>
          <Routes>
            <Route
              path="/admin/dashboard"
              exact={true}
              element={<Dashboard />}
            />
            <Route
              path="/admin/enquiries"
              exact={true}
              element={<Enquiries />}
            />
            <Route
              path="/admin/editEnquiry"
              exact={true}
              element={<EditEnquiry />}
            />
            <Route
              path="/admin/courselist"
              exact={true}
              element={<CoursesList />}
            />
            <Route
              path="/admin/addcourse"
              exact={true}
              element={<AddCourse />}
            />
            <Route
              path="/admin/categories"
              exact={true}
              element={<Categories />}
            />
            <Route path="/admin/students" exact={true} element={<Students />} />
            <Route
              path="/admin/addStudent"
              exact={true}
              element={<AddStudentForm />}
            />
            <Route
              path="/admin/editStudent/:id"
              exact={true}
              element={<EditStudent />}
            />
            <Route
              path="/admin/addInstructor"
              exact={true}
              element={<AddInstructor />}
            />
            <Route
              path="/admin/instructorList"
              exact={true}
              element={<InstructorList />}
            />
            <Route
              path="/admin/editInstructor/:id"
              element={<EditInstructor />}
            />
            <Route path="/admin/orders" element={<Orders />} />

            <Route path="/admin/enrollment" element={<Enrollment />} />
            <Route path="/admin/book-list" element={<BookList />} />
            <Route path="/admin/expenses" element={<Expenses />} />
            <Route path="/admin/income" element={<Income />} />

            <Route path="/admin/adminProfile" element={<AdminProfile />} />
            <Route path="/admin/AdminSettings" element={<AdminSettings />} />
          </Routes>
        </AdminSidebar>
      )}

      {/* Instructor Dashboard */}
      {isInstructor && (
        <InstructorSidebar>
          <Routes>
            <Route
              path="/instructor/instructor-dashboard"
              exact={true}
              element={<InstructorDashboard />}
            />
            <Route
              path="/instructor/instructor-students"
              exact={true}
              element={<InstructorStudents />}
            />
            <Route
              path="/instructor/instructor-courses"
              exact={true}
              element={<InstructorCourseList />}
            />
            <Route
              path="/instructor/instructor-fees"
              exact={true}
              element={<InstructorFees />}
            />
            <Route
              path="/instructor/schedule-classes"
              exact={true}
              element={<ScheduleClasses />}
            />
            <Route
              path="/instructor/assignments"
              exact={true}
              element={<InstructorAssignments />}
            />
            <Route
              path="/instructor/instructor-events"
              exact={true}
              element={<InstructorEvents />}
            />
            <Route
              path="/instructor/instructor-result"
              exact={true}
              element={<InstructorResultList />}
            />
          </Routes>
        </InstructorSidebar>
      )}

      {isAdmin || isInstructor ? "" : <Footer />}
    </>
  );
};

export default App;
