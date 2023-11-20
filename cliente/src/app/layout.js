import '../globals.css';
import Header from '../components/Header.js';
import Rodape from '@/components/Footer';

export const metadata = {
  title: 'Register users',
  description: 'Project for class PTAC',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body style={{ backgroundColor: "#f4f4f4" }}>
        <Header />
        <div className="mb-10"> 
          {children}
        </div>
        <Rodape />
      </body>
    </html>
  )
}
