//Graphql Query file
const searchQuery = `
    query searchPlaces($term: String, $location: String, $limit: Int, $offset: Int) {
        search(term: $term, location: $location, limit: $limit, offset: $offset) {
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

const searchTotalQuery = `
 query searchTotal($term: String, $location: String, $limit: Int, $offset: Int){
   search(term: $term, location: $location, limit: $limit, offset: $offset) {
     total
   }
 }
 `;

module.exports = searchQuery;

module.exports = searchTotalQuery;
