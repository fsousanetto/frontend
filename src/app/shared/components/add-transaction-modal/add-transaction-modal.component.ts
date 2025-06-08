import { Component, EventEmitter, Output, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Category } from '../../../core/interfaces/transaction.interface';

@Component({
  selector: 'app-add-transaction-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-transaction-modal.component.html',
  styleUrl: './add-transaction-modal.component.scss',
})
export class AddTransactionModalComponent {
  @Input() open = false;
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<any>();
  @Input() categories: Category[] = [];

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      type: ['expense', Validators.required],
      name: ['', Validators.required],
      amount: [null, [Validators.required, Validators.min(0.01)]],
      date: [new Date(), Validators.required],
      description: [''],
    });
  }

  onClose() {
    this.close.emit();
  }

  onSave() {
    if (this.form.valid) {
      this.save.emit(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }
}
