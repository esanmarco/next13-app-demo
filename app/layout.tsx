import './globals.css';
import Navigation from './navigation';
import QueryWrapper from './queryWrapper';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" data-theme="dracula">
            <head />
            <body>
                <div className="w-full max-w-full prose">
                    <QueryWrapper>
                        <Navigation />
                        {children}
                    </QueryWrapper>
                </div>
            </body>
        </html>
    );
}
