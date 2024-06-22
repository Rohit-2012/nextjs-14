'use client'

const error = (error) => {
    return (
        <div>
            {/* There was an error... */}
            {error.error.message}
        </div>
    );
}

export default error;