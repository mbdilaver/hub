import React from 'react'

import { Leaderboard } from '../Leaderboard'

export const WorldRecords = ({ levels, most_wrs, loading }) => 
        loading > 0 ? <h1>Loading...</h1> : 
        
        <div>
            <h1>Record Holders</h1>
            <Leaderboard    lines={most_wrs} 
                            loading={loading} 
                            extra_header={'WR +Secrets'}
                            extra_value_func={(obj) => 
                                obj.count + 
                                (obj.secrets_count ? (' (+' + obj.secrets_count + ')') : '')} />

            <h1>Levels</h1>
            <Leaderboard    lines={levels} 
                            loading={loading} />
        </div>
