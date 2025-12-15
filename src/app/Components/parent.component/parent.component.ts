import { Component, signal } from '@angular/core';
import { ChildComponent } from '../child.component/child.component';
import { User } from '../../Model/User';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent {
  users = signal<User[]>([]);
  selectedUser = signal<User | null>(null);
  nextId = 1;

  addUser(user: User) {
    user.id = this.nextId++;
    this.users.update((users) => [...users, user]);
  }

  editUser(user: User) {
    this.selectedUser.set(user);
  }

  updateUser(updatedUser: User) {
    this.users.update((users) =>
      users.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
    this.selectedUser.set(null);
  }
}
