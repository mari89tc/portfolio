import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './MouseFollower.module.css';

export default function MouseFollower() {
    const followerRef = useRef(null);
    useEffect(() => {
        const follower = followerRef.current;
        if (typeof window !== 'undefined') {
            const handleMouseMove = (e) => {
            gsap.to(follower, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.2,
            ease: 'power2.out',
            });
        };
            window.addEventListener('mousemove', handleMouseMove);
            return () => {
                window.removeEventListener('mousemove', handleMouseMove);
            };
        }
    }, []);

    return <div ref={followerRef} className={styles.follower}></div>;
}