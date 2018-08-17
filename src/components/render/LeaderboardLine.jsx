import React from 'react'
import { Link } from 'react-router-dom'

import { RankIcon } from './RankIcon'

import { formatDominance } from '../../utility/formatters'
import { calcDominance } from '../../utility/calculations'
import { ranks } from '../../data/naezith'

export const LeaderboardLine = ({ id, badge, eq_rank, global_score, username }) => 
    <tr>
        <td>{ eq_rank }</td>
        <td><RankIcon name={ranks[badge]} /></td>
        <td><Link to={'/player/' + id}>{ username }</Link></td>
        <td>{ formatDominance(calcDominance(global_score, 'global')) }</td>
    </tr>