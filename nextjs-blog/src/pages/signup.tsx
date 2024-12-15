import React from "react";

const signup = () => {
  return (
    <div style={styles.outerDiv}>
      <div style={styles.header}>
        <h1 style={styles.title}>Sign Up Free</h1>
        <p style={styles.subtitle}>14 day free access to unlimited resources</p>
      </div>

      <div style={styles.formContainer}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>First Name</label>
          <input
            type="text"
            style={styles.input}
            placeholder="Enter your first name"
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Last Name</label>
          <input
            type="text"
            style={styles.input}
            placeholder="Enter your last name"
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Email</label>
          <input
            type="email"
            style={styles.input}
            placeholder="Enter your email"
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Password</label>
          <input
            type="password"
            style={styles.input}
            placeholder="Enter your password"
          />
        </div>

        <button style={styles.submitButton}>Sign Up</button>
      </div>

      <div style={styles.socialLogin}>
        <p style={styles.orText}>Or sign up with:</p>
        <div style={styles.socialButtons}>
          <button style={styles.socialButton}>Google</button>
          <button style={styles.socialButton}>Apple</button>
          <button style={styles.socialButton}>Twitter</button>
        </div>
      </div>

      <div style={styles.footer}>
        <p>
          Already have an account?{" "}
          <a href="/login" style={styles.link}>
            Log In
          </a>
        </p>
      </div>
    </div>
  );
};

const styles = {
  outerDiv: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px",
    fontFamily: "Roboto, sans-serif",
    color: "#21272A",
  },
  header: {
    textAlign: "center",
    marginBottom: "20px",
  },
  title: {
    fontSize: "42px",
    fontWeight: 700,
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "18px",
    fontWeight: 400,
    lineHeight: "1.5",
  },
  formContainer: {
    width: "100%",
    maxWidth: "520px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    marginBottom: "20px",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  },
  label: {
    fontSize: "14px",
    fontWeight: 400,
    marginBottom: "5px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #DDE1E6",
    borderRadius: "4px",
  },
  submitButton: {
    padding: "12px",
    fontSize: "16px",
    color: "#FFF",
    backgroundColor: "#0F62FE",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  socialLogin: {
    textAlign: "center",
    marginTop: "40px",
  },
  orText: {
    marginBottom: "20px",
    fontSize: "14px",
    color: "#666",
  },
  socialButtons: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
  socialButton: {
    padding: "10px 20px",
    fontSize: "14px",
    color: "#FFF",
    backgroundColor: "#0F62FE",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  footer: {
    marginTop: "20px",
    fontSize: "14px",
  },
  link: {
    color: "#0F62FE",
    textDecoration: "none",
  },
};

export default signup;
