
export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  role: string;
  showPassword?: boolean;
  isEditing?: boolean;
  editableUsername?: string;
  editableEmail?: string;
  editablePassword?: string;
}
