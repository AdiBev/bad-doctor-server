//Graphql Query file
const searchQuery = `
    query searchPlaces($term: String, $location: String, $limit: Int, $offset: Int) {
        search(term: $term, location: $location, limit: $limit, offset: $offset) {
          total
          business {
            name
            phone
            id
            price
            location {
              address1
              city
              postal_code
              country
            }
            rating
            review_count
            url
            photos
            reviews {
              rating
              user {
                name
              }
              text
            }
          }
        }
    }
      `;

module.exports = searchQuery;
