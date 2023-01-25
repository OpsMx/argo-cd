import * as React from 'react';
import {revisionUrl} from './urls';

export const Revision = ({repoUrl, revision, children}: {repoUrl: string; revision: string; children?: React.ReactNode}) => {
    revision = revision || '';
<<<<<<< HEAD
    const hasPath = path && path !== '.';
    let url = revisionUrl(repoUrl, revision, hasPath);
    if (url !== null && hasPath) {
        url += '/' + path;
    }
=======
    const url = revisionUrl(repoUrl, revision);
>>>>>>> ac0fce6b6 (Inital commint - Argo CD v2.5.4 release version)
    const content = children || (isSHA(revision) ? revision.substr(0, 7) : revision);
    return url !== null ? (
        <a href={url} target='_blank' rel='noopener noreferrer'>
            {content}
        </a>
    ) : (
        <span>{content}</span>
    );
};

export const isSHA = (revision: string) => {
    // https://stackoverflow.com/questions/468370/a-regex-to-match-a-sha1
    return revision.match(/^[a-f0-9]{5,40}$/) !== null;
};
