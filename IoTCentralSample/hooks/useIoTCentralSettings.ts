import { useState, useEffect } from 'react';

export type IoTCentralSettings = {
    idScope: string
    deviceId: string
    symmetricKey?: string
}

export default function useIoTCentralSettings(): [
    IoTCentralSettings,
    {
        setIdScope(idScope: IoTCentralSettings['idScope']): void
        setDeviceId(deviceId: IoTCentralSettings['deviceId']): void
        setSymmetricKey(symmetricKey: IoTCentralSettings['symmetricKey']): void
    }
] {
    const [iotCentralSettings, setIoTCentralSettings] = useState({} as IoTCentralSettings);

    function setIdScope(idScope: IoTCentralSettings['idScope']) {
        setIoTCentralSettings({
            ...iotCentralSettings,
            idScope,
        });
    }

    function setDeviceId(deviceId: IoTCentralSettings['deviceId']) {
        setIoTCentralSettings({
            ...iotCentralSettings,
            deviceId,
        });
    }

    function setSymmetricKey(symmetricKey: IoTCentralSettings['symmetricKey']) {
        setIoTCentralSettings({
            ...iotCentralSettings,
            symmetricKey,
        });
    }

    return [iotCentralSettings as IoTCentralSettings, {
        setIdScope,
        setDeviceId,
        setSymmetricKey,
    }];
}
