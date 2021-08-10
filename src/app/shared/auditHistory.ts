
export interface AuditHistory {
  audithistoryid: number;
  tablename: string;
  columnname: string;
  id: number;
  date: Date;
  oldvalue: string;
  newvalue: string;
}
