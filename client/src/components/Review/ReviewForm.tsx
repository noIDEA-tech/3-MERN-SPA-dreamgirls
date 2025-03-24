import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_REVIEW, UPDATE_REVIEW } from '../../api/reviewMutations';
import './ReviewForm.css';

// Incident type options
const REVIEW_TYPES = [
  { value: 'harassment', label: 'Harassment' },
  { value: 'theft', label: 'Theft' },
  { value: 'assault', label: 'Assault' },
  { value: 'unsafe_environment', label: 'Unsafe Environment' },
  { value: 'safe_environment', label: 'Safe Environment' },
  { value: 'other', label: 'Other' },
];

// Safety rating options
const SAFETY_RATINGS = [
  { value: 5, label: 'Very Safe', icon: '👍' },
  { value: 4, label: 'Safe', icon: '😊' },
  { value: 3, label: 'Neutral', icon: '😐' },
  { value: 2, label: 'Unsafe', icon: '😟' },
  { value: 1, label: 'Very Unsafe', icon: '👎' },
];

interface ReviewFormProps {
  location: {
    lng: number;
    lat: number;
    address: string;
  };
  review?: any; // Optional existing review for editing
  onSuccess?: () => void;
  onCancel?: () => void;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ location, review, onSuccess, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    reviewType: REVIEW_TYPES[0].value,
    severity: 3, // Default to neutral
  });

  // Initialize form with existing review data if provided
  useEffect(() => {
    if (review) {
      setFormData({
        title: review.title || '',
        description: review.description || '',
        reviewType: review.reviewType || REVIEW_TYPES[0].value,
        severity: review.severity || 3,
      });
    }
  }, [review]);

  // Use the appropriate mutation based on whether we're editing or creating
  const [addReview, { loading: addLoading, error: addError }] = useMutation(ADD_REVIEW, {
    onCompleted: () => {
      if (onSuccess) onSuccess();
    },
  });

  const [updateReview, { loading: updateLoading, error: updateError }] = useMutation(UPDATE_REVIEW, {
    onCompleted: () => {
      if (onSuccess) onSuccess();
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'severity' ? parseInt(value, 10) : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      if (review) {
        // Update existing review
        await updateReview({
          variables: {
            reviewId: review._id,
            reviewData: {
              title: formData.title,
              description: formData.description,
              reviewType: formData.reviewType,
              severity: formData.severity,
              location: {
                type: 'Point',
                coordinates: [location.lng, location.lat],
                address: location.address,
              },
            },
          },
        });
      } else {
        // Add new review
        await addReview({
          variables: {
            reviewData: {
              title: formData.title,
              description: formData.description,
              reviewType: formData.reviewType,
              severity: formData.severity,
              location: {
                type: 'Point',
                coordinates: [location.lng, location.lat],
                address: location.address,
              },
            },
          },
        });
      }
    } catch (err) {
      console.error('Error submitting review:', err);
    }
  };

  const loading = addLoading || updateLoading;
  const error = addError || updateError;

  return (
    <div className="review-form-wrapper">
      <h2>{review ? 'Edit Safety Review' : 'Submit a Safety Review'}</h2>
      <p className="location-address">Location: {location.address}</p>
      
      <form onSubmit={handleSubmit} className="review-form">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            placeholder="Brief title for your review"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            placeholder="Please describe the safety concern in detail"
            rows={4}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="reviewType">Type of Concern</label>
          <select
            id="reviewType"
            name="reviewType"
            value={formData.reviewType}
            onChange={handleChange}
            required
          >
            {REVIEW_TYPES.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>
        
        <div className="form-group">
          <label>Safety Rating</label>
          <div className="safety-rating-options">
            {SAFETY_RATINGS.map((rating) => (
              <label key={rating.value} className="rating-option">
                <input
                  type="radio"
                  name="severity"
                  value={rating.value}
                  checked={formData.severity === rating.value}
                  onChange={handleChange}
                />
                <span className="rating-icon">{rating.icon}</span>
                <span className="rating-label">{rating.label}</span>
              </label>
            ))}
          </div>
        </div>
        
        {error && (
          <div className="error-message">
            Error submitting review: {error.message}
          </div>
        )}
        
        <div className="form-actions">
          <button type="button" onClick={onCancel} className="cancel-button">
            Cancel
          </button>
          <button type="submit" disabled={loading} className="submit-button">
            {loading ? 'Submitting...' : review ? 'Update Review' : 'Submit Review'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;