import React, { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import { Stack } from 'react-bootstrap';
import { FaHome, FaInfoCircle, FaEnvelope } from 'react-icons/fa';

const DashBoard = () => {
  const [value, setValue] = useState(0);

  // Content for each tab
  const myData = [
    { content: 'One kiss is all it takes.' },
    { content: 'Two is my number' },
    { content: 'Three is an odd number.' }
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Stack direction="row" gap={2} alignItems="flex-start" className="relative">
        {/* Tabs with Icons */}
        <Box sx={{ borderRight: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} orientation="vertical">
            <Tab label="Item One" icon={<FaHome />} />
<Tab label="Item Two" icon={<FaInfoCircle />} />
<Tab label="Item Three" icon={<FaEnvelope />} />

          </Tabs>
        </Box>

        {/* Tab Content */}
        <Box sx={{ flexGrow: 1, padding: 2, textAlign: 'center' }}>
          <div className="tab-content absolute top-1/3 left-1/3 w-1/2 m-auto">
            {myData[value] && (
              <Box
                sx={{
                  backgroundColor: '#f4f6f8',
                  padding: 3,
                  borderRadius: 2,
                  boxShadow: 2,
                  fontSize: '1.5rem',
                  color: '#333',
                }}
              >
                {myData[value].content}
              </Box>
            )}
          </div>
        </Box>
      </Stack>
    </div>
  );
};

export default DashBoard;
