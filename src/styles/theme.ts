import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
    colors: {
      primary: "#0074D9",
      HoverPrimaryColor: "#51A5EE",
      BabyBlue:"#BDDBF6",
      LightBlue:"#DEEFFF"
    },
    fonts:{
        heading:"QuickSand, sans-serif",
        body:"Roboto, sans-serif"
    }
  })

  export default theme;