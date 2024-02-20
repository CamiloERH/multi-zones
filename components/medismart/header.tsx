import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const Header = () => {
    return (
        <div className='flex h-[80px] border shadow-sm items-center'>
            <Button><Link href="/Paciente/Index">Ir al inicio</Link></Button>
        </div>
    )
}
