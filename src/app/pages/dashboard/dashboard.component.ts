import { Component, OnInit } from '@angular/core';
import { CoreModule } from '../../core/core.module';
import { UserService } from '../../core/services/user/user.service';
import { WalletService } from '../../core/services/wallet.service';
import { categoryLabels } from '../../core/services/utils/category-labels';
import { BalanceCardComponent } from '../../shared/components/balance-card/balance-card.component';
import { RecentTransactionsCardComponent } from '../../shared/components/recent-transactions-card/recent-transactions-card.component';
import { HistoryChartCardComponent } from '../../shared/components/history-chart-card/history-chart-card.component';
import { Router } from '@angular/router';
import { AddTransactionModalComponent } from '../../shared/components/add-transaction-modal/add-transaction-modal.component';
import { ConfirmModalComponent } from '../../shared/components/confirm-modal/confirm-modal.component';
import { Category } from '../../core/interfaces/transaction.interface'; 

@Component({
  selector: 'app-dashboard',
  imports: [
    CoreModule,
    BalanceCardComponent,
    RecentTransactionsCardComponent,
    HistoryChartCardComponent,
    AddTransactionModalComponent,
    ConfirmModalComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  loading = true;
  categories: Category[] = [];
  categoryLabels = categoryLabels;
  balance: number = 0;
  history: any[] = [];
  recent: any[] = [];
  showAddTransactionModal = false;
  showConfirmModal = false;
  transactionToDelete: string | null = null;

  constructor(
    private userService: UserService,
    private walletService: WalletService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loading = true;

    this.userService.getCategories().subscribe({
      next: (cats) => (this.categories = cats),
      error: (error) => {
        this.categories = [];
        this.handleAuthError(error);
      },
    });

    this.walletService.getBalance().subscribe({
      next: (res) => {
        this.balance = res.balance ?? 0;
      },
      error: (error) => {
        this.balance = 0;
        this.handleAuthError(error);
      },
    });

    this.walletService.getHistory().subscribe({
      next: (res) => (this.history = res.history),
      error: (error) => {
        this.history = [];
        this.handleAuthError(error);
      },
    });

    this.walletService.getRecent().subscribe({
      next: (res) => (this.recent = res.recent),
      error: (error) => {
        this.recent = [];
        this.handleAuthError(error);
      },
    });

    this.loading = false;
  }

  private handleAuthError(error: any) {
    if (error.status === 401 || error.status === 403) {
      alert(
        'Sua sessão expirou ou você não tem autorização. Faça login novamente.'
      );
      this.router.navigate(['/auth/login']);
    } else {
      console.error('Erro ao buscar dados do dashboard:', error);
    }
  }

  openAddTransactionModal() {
    this.showAddTransactionModal = true;
  }

  closeAddTransactionModal() {
    this.showAddTransactionModal = false;
  }

  saveTransaction(data: any) {
    const selectedCategory = this.categories.find(
      (cat) => cat.name === data.name && cat.type === data.type
    );
    if (!selectedCategory) {
      alert('Categoria inválida!');
      return;
    }
    const payload = {
      ...data,
      category: selectedCategory.id,
    };
    this.walletService.createTransaction(payload).subscribe({
      next: () => {
        this.showAddTransactionModal = false;
        this.walletService.getBalance().subscribe({
          next: (res) => (this.balance = res.balance ?? 0),
        });
        this.walletService.getHistory().subscribe({
          next: (res) => (this.history = res.history),
        });
        this.walletService.getRecent().subscribe({
          next: (res) => (this.recent = res.recent),
        });
      },
      error: (err) => {
        alert('Erro ao salvar transação!');
        console.error(err);
      },
    });
  }

  onDeleteTransaction(id: string) {
    this.transactionToDelete = id;
    this.showConfirmModal = true;
  }

  confirmDeleteTransaction() {
    if (!this.transactionToDelete) return;
    this.walletService.deleteTransaction(this.transactionToDelete).subscribe({
      next: () => {
        this.walletService.getBalance().subscribe({
          next: (res) => (this.balance = res.balance ?? 0),
        });
        this.walletService.getHistory().subscribe({
          next: (res) => (this.history = res.history),
        });
        this.walletService.getRecent().subscribe({
          next: (res) => (this.recent = res.recent),
        });
        this.showConfirmModal = false;
        this.transactionToDelete = null;
      },
      error: (err) => {
        alert('Erro ao excluir transação!');
        console.error(err);
        this.showConfirmModal = false;
        this.transactionToDelete = null;
      },
    });
  }

  cancelDeleteTransaction() {
    this.showConfirmModal = false;
    this.transactionToDelete = null;
  }
}
