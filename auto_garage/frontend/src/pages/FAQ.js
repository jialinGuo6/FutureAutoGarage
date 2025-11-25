/**
 * FutureAutoGarage - FAQ Page
 * Author: Jialin Guo
 * Created: 2025-11-07
 * Description: FAQ Page for Future Auto Garage
 */
import React from 'react';
import {
  Container,
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FAQ() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      {/* Title */}
      <Typography variant="h4" component="h1" sx={{ marginBottom: '24px', textAlign: 'center', color: '#2c3e50', fontWeight: 600 }}>     
        Frequently Asked Questions
      </Typography>

      {/* Short explanation */}
      <Typography
        variant="body1"
        align="center"
        sx={{ mb: 6, color: 'text.secondary', maxWidth: '80%', mx: 'auto' }}
      >
        Answers to common questions about our services, tires, and customer care.
      </Typography>

      {/* The FAQ grouping function - FAQ 分组函数*/}
      {[
        {
          title: 'General',
          color: '#1976d2',
          items: [
            {
              q: 'Do I need an appointment before coming in?',
              a: 'Appointments are recommended to ensure timely service, but we also accept walk-ins when possible. You can call or message us on Facebook to book ahead.',
            },
            {
              q: 'How can I contact you?',
              a: 'You can reach us at (506) 288-0999 or message us directly through our Facebook page.',
            },
            {
              q: 'Where is Future Auto Garage located?',
              a: 'We’re located at 529 Rothesay Ave, Saint John, NB. Visit our Contact & Location page for directions.',
            },
            {
              q: 'When do you open and close?',
              a: 'We are open Monday to Saturday from 12:00 PM to 5:00 PM. Closed on Sunday.',
            },
          ],
        },
        {
          title: 'Services',
          color: '#1565c0',
          items: [
            {
              q: 'What types of auto repair do you offer?',
              a: 'We provide general maintenance including oil changes, brake inspections, tire installation, TPMS sensors, and diagnostic checks. We also install lighting and camera systems.',
            },
            {
              q: 'Can you install parts that I bring in myself?',
              a: 'Yes, in most cases we can install customer-supplied parts. Please contact us first to confirm compatibility.',
            },
            {
              q: 'What are you selling?',
              a: 'New tires, headlights, and rearview mirrors are available, as well as used tires and cars.',
            },
          ],
        },
        {
          title: 'Tires',
          color: '#0d47a1',
          items: [
            {
              q: 'Do you sell both all-season and winter tires?',
              a: 'Yes, we carry multiple tire brands including all-season, winter models and used tires. Popular options include Linglong and more.',
            },
            {
              q: 'Do you offer tire balancing or alignment?',
              a: 'We provide tire balancing and installation services. For alignment, please contact us to confirm availability.',
            },
          ],
        },
        {
          title: 'Payment & Warranty',
          color: '#003c8f',
          items: [
            {
              q: 'What payment methods do you accept?',
              a: 'We accept debit, credit, mobile payments, and cash.',
            },
            {
              q: 'Do your services come with warranty?',
              a: 'Yes, most services and parts include a limited warranty. Details vary by manufacturer and service type.',
            },
          ],
        },
      ].map((section, idx) => (
        <Box key={idx} sx={{ mb: 6 }}>
          {/* Title of each group */}
          <Typography
            variant="h5"
            sx={{
              mb: 2,
              fontWeight: 600,
              color: section.color,
              borderRadius: 1,
              px: 1.5,
              py: 0.5,
              display: 'inline-block',
            }}
          >
            {section.title}
          </Typography>

          {/* Each question */}
          {section.items.map((item, i) => (
            <Accordion
              key={i}
              elevation={2}
              sx={{
                mb: 1.5, 
                borderRadius: '12px !important',
                backgroundColor: '#fafafa',
                '&:hover': { backgroundColor: '#f3f6fb' },
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: section.color }} />}>
                <Typography sx={{ fontWeight: 500 }}>{item.q}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="text.secondary">{item.a}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      ))}
    </Container>
  );
}
