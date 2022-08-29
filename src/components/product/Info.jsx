import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import {Paper, Box} from '@mui/material';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

 const Info = ({product}) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper sx={{ width: '100%' }} elevation="6">
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }} style={{ display: 'flex', justifyContent: 'center' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Description" {...a11yProps(0)} />
          <Tab label="Additional Information" {...a11yProps(1)} />
          <Tab label="Shipping & Returns" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {product.long_description}
      </TabPanel>
      <TabPanel value={value} index={1}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.
        Fabric & care
        Faux suede fabric
        Gold tone metal hoop handles.
        RI branding
        Snake print trim interior
        Adjustable cross body strap
        Height: 31cm; Width: 32cm; Depth: 12cm; Handle Drop: 61cm
        Size
        one size
        <br/>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.
        Fabric & care
        Faux suede fabric
        Gold tone metal hoop handles.
        RI branding
        Snake print trim interior
        Adjustable cross body strap
        Height: 31cm; Width: 32cm; Depth: 12cm; Handle Drop: 61cm
        Size
        one size
      </TabPanel>
      <TabPanel value={value} index={2}>
        We deliver to over 100 countries around the world. For full details of the delivery options we offer, please view our Delivery information
        We hope you’ll love every purchase, but if you ever need to return an item you can do so within a month of receipt. For full details of how to make a return, please view our Returns information
        <br/>
        We deliver to over 100 countries around the world. For full details of the delivery options we offer, please view our Delivery information
        We hope you’ll love every purchase, but if you ever need to return an item you can do so within a month of receipt. For full details of how to make a return, please view our Returns information
        <br/>
        We deliver to over 100 countries around the world. For full details of the delivery options we offer, please view our Delivery information
        We hope you’ll love every purchase, but if you ever need to return an item you can do so within a month of receipt. For full details of how to make a return, please view our Returns information
      </TabPanel>
    </Paper>
  );
}
export default Info;