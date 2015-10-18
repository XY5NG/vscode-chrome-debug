/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/

import {createServer} from 'net';
import {WebKitDebugSession} from './webKitDebugSession';
import {DebugSession} from '../common/debugSession';

DebugSession.run(WebKitDebugSession);

setInterval(() => console.log('-'), 1000);