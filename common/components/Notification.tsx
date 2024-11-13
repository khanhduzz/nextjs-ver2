import { useState, useEffect } from 'react';

type NotificationProps = {
    message: string;
    type: 'success' | 'error' | 'info' | 'warning';
    duration?: number;
    onClose: () => void;
};

const Notification: React.FC<NotificationProps> = ({ message, type, duration = 3000, onClose }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
            onClose();
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onClose]);

    if (!visible) {
        return null;
    }

    const typeClass = {
        success: 'notification-success',
        error: 'notification-error',
        info: 'notification-info',
        warning: 'notification-warning'
    }[type];

    return (
        <div className={`notification ${typeClass}`}>
            <p>{message}</p>
            <button className="notification-close" onClick={() => { setVisible(false); onClose(); }}>
                &times;
            </button>
            <style jsx>{`
                .notification {
                    padding: 16px;
                    border-radius: 4px;
                    margin: 16px 0;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    max-width: 300px;
                    color: #fff;
                }
                .notification-success { background-color: #4CAF50; }
                .notification-error { background-color: #F44336; }
                .notification-info { background-color: #2196F3; }
                .notification-warning { background-color: #FF9800; }
                .notification-close {
                    background: none;
                    border: none;
                    color: inherit;
                    cursor: pointer;
                    font-size: 20px;
                    line-height: 1;
                }
            `}</style>
        </div>
    );
};

export default Notification;
