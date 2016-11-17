/**
 * Load vo scholen from DUO API
 */
import DUOAPIClient from '../src';

const duo = new DUOAPIClient();
duo.getVoVestigingen({ brin: '17VN' }).then(console.log).catch(console.error);
