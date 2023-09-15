import Sidebar from '@/components/(shared)/Sidebar/Sidebar';
import React from 'react';

const AdminDashboardPage = () => {

    return (
            <div className="h-[100dvh] flex flex-col justify-between">
                <div className='relative min-h-screen md:flex'>
                  <Sidebar />
                  <div className='flex-1 md:ml-72'>
                    <div className='p-5'>
                     <p>aiudsakjsdashdkuadkasdniuahdei</p>
                    </div>
                  </div>
                </div>
             
          
            </div>
        
    );
};

export default AdminDashboardPage;