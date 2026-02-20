import React, { useState } from 'react';

const OrderReview = ({ orderId }) => {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async () => {
        if (isSubmitting) return;

        setIsSubmitting(true);
        try {
            await submitReview(orderId, rating, comment);
            // Handle successful submission (e.g., show a message)
        } catch (error) {
            // Handle error (e.g., show an error message)
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div>
            <h3>Review your order</h3>
            <div>
                <span>Rating: </span>
                <input
                    type="number"
                    value={rating}
                    onChange={e => setRating(e.target.value)}
                    min="1"
                    max="5"
                />
            </div>
            <textarea
                value={comment}
                onChange={e => setComment(e.target.value)}
                placeholder="Leave a comment"
            />
            <button onClick={handleSubmit} disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit Review'}
            </button>
        </div>
    );
};

export default OrderReview;