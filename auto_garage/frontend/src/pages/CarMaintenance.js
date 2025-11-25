/**
 * FutureAutoGarage - Service - CarMaintenance Component - 车辆保养
 * Author: Jialin Guo
 * Created: 2025-11-03
 * Description: This component displays information about car maintenance services, 
 * including the right content area and left sidebar information
 * Left Sidebar Information
 * -  Regular Car Maintenance → 例行保养：换油、滤清器、例行检查
 * -  Seasonal Car Maintenance → 季节性保养：冬夏轮胎检查、空调/冷却系统准备
 * -  Car Alignment → 四轮定位，延长轮胎寿命，改善操控    
 * -  Cabin Air Filter → 舱内空气滤芯更换
 * -  Differential Service → 差速器液体更换、轻度检查，确保行驶平稳
 */
import ServiceDetails from '../components/ServiceDetails';
import { useState } from 'react';

export default function CarMaintenance() {
  const [selectedService, setSelectedService] = useState('Regular Car Maintenance');

  const servicesType = [
    'Regular Car Maintenance',
    'Seasonal Car Maintenance',
    'Car Alignment',
    'Cabin Air Filter',
    'Differential Service'
  ];

  const serviceContent = {
    'Regular Car Maintenance': {
      title: 'Regular Car Maintenance',
      description: 'Routine preventive maintenance to keep your vehicle operating safely and efficiently.',
      details: 'Includes oil changes, air and engine filter replacements, fluid level checks, and visual inspection of belts, hoses, brakes, and tires. No major repairs included.',
      benefits: [
        'Maintains vehicle reliability',
        'Extends vehicle lifespan',
        'Improves fuel efficiency',
        'Maintains warranty coverage'
      ]
    },
    'Seasonal Car Maintenance': {
      title: 'Seasonal Vehicle Maintenance',
      description: 'Prepare your vehicle for seasonal changes to ensure optimal performance and safety.',
      details: 'Winter: tire checks, battery inspection, antifreeze top-up. Summer: A/C system check, coolant inspection, tire pressure adjustment. Minor seasonal adjustments only.',
      benefits: [
        'Vehicle prepared for weather conditions',
        'Improved seasonal performance',
        'Prevents weather-related breakdowns'
      ]
    },
    'Car Alignment': {
      title: 'Wheel Alignment Service',
      description: 'Proper wheel alignment helps prevent uneven tire wear and ensures stable handling.',
      details: 'We perform alignment adjustments using precision equipment, following manufacturer specifications. Only alignment service, no suspension part replacement.',
      benefits: [
        'Even tire wear',
        'Better vehicle handling',
        'Improved fuel economy'
      ]
    },
    'Cabin Air Filter': {
      title: 'Cabin Air Filter Replacement',
      description: 'Replace cabin air filters to maintain clean interior air quality.',
      details: 'Removes dust, pollen, and pollutants. Recommended at regular intervals depending on vehicle model and environment.',
      benefits: [
        'Improved cabin air quality',
        'Reduced allergens',
        'Maintains HVAC efficiency'
      ]
    },
    'Differential Service': {
      title: 'Differential Maintenance',
      description: 'Basic service for vehicle differential to ensure smooth drivetrain operation.',
      details: 'Includes differential fluid inspection and replacement if needed. Minor checks of seals and gears. Major differential repairs are not performed.',
      benefits: [
        'Smooth turning and traction',
        'Reduced drivetrain wear',
        'Maintains vehicle stability'
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