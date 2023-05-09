import Link from "next/link";
import React from "react";
import styles from "../styles/Header.module.css";
import SignInButton from "./SignInButton";

export default function Header() {
    return (
        <>
            <div className={styles.headerContainer}>
                <div className={styles.left}>
                    <Link href={"/"}>
                        <img src="/logo.png" alt="logo" className={styles.logo} />
                    </Link>

                    <Link href={"/create"} style={{border:"black 2px solid",padding:"10px",fontSize:"20px",borderRadius:"5px",marginLeft:"20px"}}>Create a Post</Link>
                </div>

                <div className={styles.right}>
                    <SignInButton />
                </div>
            </div>
            <div style={{ height: 64 }} />
        </>
    );
}