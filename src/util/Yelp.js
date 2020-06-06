const apiKey = 'n4-MQTIefmS8U-t2CkyFUlnJUhP2mAZXIbWxNkvalBZ7yGlKlRMBmE8UCYjbXmU9sc-vm8mihTFFJjUhXxw5IfB0zz8PTf5gRilaIdE3JPm4dOvfFvm23by63-HbXnYx';

export const Yelp = {
    search(term = 'pizza', location = 'dominican', sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sortBy=${sortBy}`, { 'headers': { 'Authorization': `Bearer ${apiKey}` } }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    return {
                        'id': business.id,
                        'imageSrc': business.image_url,
                        'name': business.name,
                        'address': business.location.address1,
                        'city': business.location.city,
                        'state': business.location.state,
                        'zipCode': business.location.zip_code,
                        'category': business.category,
                        'rating': business.rating,
                        'reviewCount': business.review_count
                    }
                });
            }
        })
    }
}

