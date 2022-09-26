import gql from 'graphql-tag';

export const GET_PRODUCTS = gql`
query {
    products {
     data{ 
         id
       attributes {
         name
         slug
         price
         sale_price
         saleUntil
         short_description
         long_description
         new
         variants{
           stock
           color_name
         }
             category{
           data{
             attributes{
               name
               slug
             }
           }
         }
         images{
           data{
             attributes{
               url
             }
           }
         }    
       }
     }
   }
 }
`

export const GET_PRODUCT = gql`
query GetProductsBySlug($slug: String!) {
    products (filters: { slug: {eq: $slug}}) {
    data {
      id
      attributes {
        name
        slug
        price
        sale_price
        saleUntil
        short_description
        long_description
        new
        variants{
          stock
          color_name
        }
           category{
          data{
            attributes{
              name
              slug
            }
          }
        }
       images{
          data{
            attributes{
              url
              width
              height
              formats
            }
          }
        }     
      }
    }
  }
}
`

export const GET_PRODUCTS_BY_CATEGORY = gql`
query GetProductsByCategory($slug: String!) {
    categories (filters: { slug: {eq: $slug}}) {
      data{
        attributes{
          name
          slug
          createdAt
          updatedAt
          publishedAt
         products {
        data{
          attributes {
            name
            slug
            price
            sale_price
            saleUntil
            short_description
            long_description
            new
            variants{
              stock
              color_name
            }
                category{
              data{
                attributes{
                  name
                  slug
                }
              }
            }
            stock
            images{
              data{
                attributes{
                  url
                }
              }
            }    
          }
        }
      }
        }
      }
    }
    }
`
