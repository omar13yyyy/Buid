// Copyright 2025 Omar Alhaj Ali
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {BuidGenerator,} from '../src/buid'
import path from 'path';


const filePath = path.join(__dirname, 'dataTableFame.json');
const generator = new BuidGenerator( {path: filePath} );
    const extraBuid = generator.getExtraBuid(); //get btuid
    const BigIntbuid = generator.getId();
    const encodeBuid =generator.getEncodeBuid()
    const decodeBuid = generator.decodeToBuid(encodeBuid);
    generator.decodeToBigint(encodeBuid)













