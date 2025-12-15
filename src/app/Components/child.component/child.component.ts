import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../Model/User';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  @Input() user: User | null = null;

  @Output() addUser = new EventEmitter<User>();
  @Output() updateUser = new EventEmitter<User>();

  id!: number;
  name = '';
  email = '';
  role: 'Admin' | 'User' = 'User';

  ngOnChanges() {
    if (this.user) {
      // Edit Mode
      this.id = this.user.id;
      this.name = this.user.name;
      this.email = this.user.email;
      this.role = this.user.role;
    } else {
      // Add Mode
      this.resetForm();
    }
  }

  submit() {
    if (!this.name || !this.email) return;

    const userData: User = {
      id: this.id,
      name: this.name,
      email: this.email,
      role: this.role,
    };

    if (this.user) {
      this.updateUser.emit(userData);
    } else {
      this.addUser.emit(userData);
    }

    this.resetForm();
  }

  resetForm() {
    this.id = 0;
    this.name = '';
    this.email = '';
    this.role = 'User';
  }
}
