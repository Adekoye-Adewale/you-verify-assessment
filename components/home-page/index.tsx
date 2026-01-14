'use client'
import { useRouter } from 'next/navigation';

export default function HomePageComponents() {

        const router = useRouter();

        return (
                <div className='bg-[#F5F6FA] h-[300vh]'>
                        <button
                                onClick={() => router.push('/invoice?inv=Invoice%20-%201023494%20-%202304')}
                        >
                                Click to open pop up
                        </button>
                </div>
        )
}
