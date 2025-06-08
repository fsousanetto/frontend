export interface AuthHistory {
  id: string;
  userId: string;
  startDate: Date;
  endDate?: Date;
  ipAddress?: string;
  userAgent?: string;
}
