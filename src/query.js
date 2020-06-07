//Graphql Query file
const searchQuery = `
    query searchPlaces($term: String, $location: String, $limit: Int) {
        search(term: $term, location: $location, limit: $limit) {
          total
          business {
            name
          }
        }
    }
      `;

module.exports = searchQuery;
