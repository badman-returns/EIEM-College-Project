import React from 'react';
import { Switch } from 'react-router-dom';
import Dashboard from '../admin/pages/dashboard/dashboard';
import AuthGuard from '../admin/utility/authGuard';


const AdminRouter = () => {
    return (
        <>
                <Switch>
                    <AuthGuard path='/dashboard'>
                        <Dashboard />
                    </AuthGuard>
                </Switch>
        </>
    )
}

export default AdminRouter;