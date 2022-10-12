import { Box, Typography } from "@mui/material"


type Props = {
    informationList: Array<any>
}

const PlaceInfomationList = (props: Props) =>{

    const { informationList } = props

    return(
        <>
              <Box
              sx={{
                  display: 'flex', 
                  flexDirection: 'column',
                  gap: '30px',
                  padding: { xs: '2%', sm: '2%' }
              }}
          >
              {
                  informationList?.map((el: any, index: number) => {
                      const { title, content } = el
                      return(
                          <Box
                              sx={{
                                  display: 'flex',
                                  flexDirection: 'column',
                                  gap: '10px'
                              }}
                          >
                              <Typography 
                                  variant="h6" 
                                  style={{ fontSize: '20px', fontWeight: '600' }}
                              >
                                  [ {title} ]
                              </Typography>   
                              <Typography variant="body1">
                                  <div  dangerouslySetInnerHTML={{ __html: content }} />
                              </Typography>   

                          </Box>
                      )
                  })
              }

          </Box>

        </>
    )
}

export default PlaceInfomationList;