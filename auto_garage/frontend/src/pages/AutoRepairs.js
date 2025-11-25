/**
 * FutureAutoGarage - Service - AutoRepairs Component - 车辆维修/保养
 * Author: Jialin Guo
 * Created: 2025-11-03
 * Description: This component displays information about car maintenance services, 
 * including the right content area and left sidebar information
 * 
 * Tire Replacement / Installation → 换胎、安装、平衡，所有常见轮胎类型
 * Engine Diagnostics → 电脑诊断，轻微调整和小问题修理
 * Brake Service → 刹车检查、刹车片更换、刹车液补充
 * Transmission Fluid Service → 仅液体更换、轻微调节，不拆装大修
 * Electrical System → 电池、发电机、启动器检查与小修
 * Air Conditioning → 空调系统加氟、泄漏检测、小部件修理
 * Exhaust System → 排气检查、轻微管道或消声器修理
 * Suspension & Steering Maintenance → 悬挂/转向日常维护与轻修
 */
import ServiceDetails from '../components/ServiceDetails';
import { useState } from 'react';

export default function AutoRepairs() {
  const [selectedService, setSelectedService] = useState('Tire Replacement / Installation');

  const servicesType = [
    'Tire Replacement / Installation',
    'Engine Diagnostics',
    'Brake Service',
    'Transmission Fluid Service',
    'Electrical System',
    'Air Conditioning',
    'Exhaust System',
    'Suspension & Steering Maintenance'
  ];

  const serviceContent = {
    'Tire Replacement / Installation': {
      title: 'Tire Replacement & Installation',
      description: 'Safe and professional tire replacement for common vehicle makes and models. Covers all-season, winter, and used tires.',
      details: 'Services include tire removal, mounting, balancing, and safety inspection. Our technicians ensure tires are properly installed and secure for daily driving.',
      benefits: [
        'Proper installation for road safety',
        'Balanced tires for smoother ride',
        'Improved tire longevity',
        'Compatible with a wide range of tires'
      ]
    },
    'Engine Diagnostics': {
      title: 'Engine Diagnostics & Minor Adjustments',
      description: 'Computerized diagnostics to identify engine issues and perform minor adjustments.',
      details: 'We use diagnostic scanners to read engine codes, check sensors, and identify minor issues such as misfires or small maintenance needs. We perform adjustments that do not require full engine disassembly.',
      benefits: [
        'Early identification of engine issues',
        'Prevent major mechanical failures',
        'Saves time and maintenance costs',
        'Professional and accurate assessment'
      ]
    },
    'Brake Service': {
      title: 'Brake Inspection & Service',
      description: 'Comprehensive brake inspection and basic servicing to maintain safe stopping performance.',
      details: 'Includes brake pad replacement, rotor inspection, fluid top-up, and minor repairs such as brake hardware adjustment. Major brake rebuilds are not included.',
      benefits: [
        'Reliable braking performance',
        'Enhanced vehicle safety',
        'Extended component life',
        'Prevent unexpected brake issues'
      ]
    },
    'Transmission Fluid Service': {
      title: 'Transmission Fluid Check & Replacement',
      description: 'Routine fluid replacement and top-up for automatic and manual transmissions.',
      details: 'We perform transmission fluid inspection, replacement, and minor adjustments to maintain smooth shifting. We do not perform full transmission rebuilds or major repairs.',
      benefits: [
        'Maintains smooth gear shifting',
        'Extends transmission lifespan',
        'Prevents minor transmission issues'
      ]
    },
    'Electrical System': {
      title: 'Electrical System Inspection & Minor Repairs',
      description: 'Diagnostics and minor repairs for basic electrical components.',
      details: 'Includes battery testing/replacement, alternator and starter inspection, and troubleshooting common electrical issues such as blown fuses or minor wiring problems.',
      benefits: [
        'Reliable starting and charging',
        'Functional essential electrical systems',
        'Quick resolution of minor electrical faults'
      ]
    },
    'Air Conditioning': {
      title: 'Air Conditioning Service',
      description: 'Ensure the vehicle\'s A/C operates efficiently.',
      details: 'Includes refrigerant top-up, leak detection, minor component repair, and system inspection. Major component replacement or compressor rebuild is not performed.',
      benefits: [
        'Comfortable cabin climate',
        'Efficient cooling',
        'Improved air quality inside vehicle'
      ]
    },
    'Exhaust System': {
      title: 'Exhaust System Inspection & Minor Repairs',
      description: 'Basic exhaust inspection and minor repairs to maintain safety and compliance.',
      details: 'Services include muffler replacement, minor pipe repair, and basic emission checks. Major exhaust system reconstruction is not performed.',
      benefits: [
        'Reduced emissions',
        'Improved fuel efficiency',
        'Quieter vehicle operation'
      ]
    },
    'Suspension & Steering Maintenance': {
      title: 'Suspension & Steering Maintenance',
      description: 'Routine inspection and minor servicing of suspension and steering components.',
      details: 'Includes shock/strut inspection, spring checks, steering fluid top-up, and minor adjustments. Major suspension rebuilds or part replacements are not performed.',
      benefits: [
        'Stable and safe handling',
        'Comfortable ride',
        'Even tire wear',
        'Enhanced driving safety'
      ]
    }
  };

  return (

        <ServiceDetails 
        servicesType={servicesType} 
        serviceContent = {serviceContent}
        selectedService={selectedService}
        setSelectedService={setSelectedService}
        />
     
  );
}
