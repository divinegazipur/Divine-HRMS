export interface Employee {
  id: number;
  employeeId: string;
  firstName: string;
  lastName: string;
  fullName: string;
  email: string;
  phone: string;
  department: string;
  designation: string;
  status: "Active" | "Inactive" | "On Leave";
  joiningDate: string;
  salary: number;
  avatar: string;
}