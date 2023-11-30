import { Link, Navigate, useNavigate } from 'react-router-dom';
import './forgotpass.css';

export default function Forgotpass() {
    return (
        <>
            <div id='background'>
                <Link to={'/'}>
                    {' '}
                    <button>Back</button>
                </Link>
            </div>
        </>
    );
}
