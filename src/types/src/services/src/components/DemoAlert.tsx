import React from 'react';
import { AlertCircle } from 'lucide-react';

export const DemoAlert: React.FC = () => (
  <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl my-4 flex items-start gap-3 shadow-sm">
    <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
    <div className="text-xs text-amber-800 leading-relaxed">
      <strong>Демонстрационные данные:</strong> Тарифы, проходные баллы и списки программ приведены в качестве демонстрации платформы UniGuide KZ. Всегда сверяйте официальные данные на сайтах вузов и Национального центра тестирования (НЦТ).
    </div>
  </div>
);
