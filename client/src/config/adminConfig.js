// NOTE: This is just for development. In production, these credentials should be stored securely in a backend database
export const adminCredentials = [
    {
        email: 'admin@collegebuddy.com',
        password: 'admin123' // In production, this should be hashed
    },
    {
        email: 'principal@collegebuddy.com',
        password: 'admin123'
    },
    {
        email: 'harshvardhanchinchkhedkar@gmail.com',
        password: 'collegebuddy@123'
    }
];

// Helper function to check if email is admin
export const isAdminEmail = (email) => {
    return adminCredentials.some(admin => admin.email.toLowerCase() === email.toLowerCase());
};

// Helper function to verify admin password
export const verifyAdminPassword = (email, password) => {
    const admin = adminCredentials.find(admin => admin.email.toLowerCase() === email.toLowerCase());
    return admin && admin.password === password;
}; 