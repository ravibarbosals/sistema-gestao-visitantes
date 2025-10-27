export interface AnnouncementType {
    id: number;
    title: string;
    content: string;
    type: 'RULE' | 'INFO' | 'MAINTENANCE'; // Exemplo de ENUM
    publishedAt: string;
  }