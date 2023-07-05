import { DateTime } from 'luxon';

type Blog = {
    title: string;
    content: string[];
    createdAt: DateTime;
    lastUpdatedAt: DateTime;
};

const BLOGS = [
    {
        title: 'NextJS Day 1',
        content: [
            <>
                {
                    'NextJS uses a folder based routing, and thus a nested folder by default has a one-to-one mapping with a nested route. The page rendered at any level is equal to the overlay of page.{js, ts, jsx, tsx} over all layout.{js, ts, jsx, tsx} of all the subsequent parent routes.'
                }
            </>,
            <>
                To bypass this mechanism, there are also <b>Dynamic Routes</b>,
                which reuses same layout / page for an array of similar
                contents, and <b>Route Groups</b>, which reuses layout for
                virtual parent path.
            </>,
            <>
                For example, folder structure a/(b)/c could map to a/c, with b
                being a logical placeholder or a place for common layout.
            </>,
        ],
        createdAt: DateTime.utc(2023, 7, 5, 14, 44, 30).setZone(
            'Asia/Hong_Kong'
        ),
        lastUpdatedAt: DateTime.utc(2023, 7, 5, 14, 44, 30).setZone(
            'Asia/Hong_Kong'
        ),
    },
    {
        title: 'On Writing Well',
        content: [
            <>
                A very interesting book with a relativel simple premise. Cut the
                slack. At least that's what it was all about in the first 4
                chapters. In that sense, it was ironic. Starting there, it
                allows (todo: better word) the reader to add back their personal
                flavor.
            </>,
        ],
        createdAt: DateTime.utc(2023, 7, 5, 15, 0, 10).setZone(
            'Asia/Hong_Kong'
        ),
        lastUpdatedAt: DateTime.utc(2023, 7, 5, 15, 0, 10).setZone(
            'Asia/Hong_Kong'
        ),
    },
];

function Blog({ blog }: { blog: Blog }) {
    const { title, content, lastUpdatedAt } = blog;
    return (
        <div className="p-3 border-b-2">
            <div className="flex flex-row justify-between w-full p-3">
                <div>{title}</div>
                <div>
                    {lastUpdatedAt
                        .setLocale('zh-tw')
                        .toLocaleString(DateTime.DATETIME_SHORT)}
                </div>
            </div>
            <div>
                {content.map((c) => (
                    <p className="pb-3">{c}</p>
                ))}
            </div>
        </div>
    );
}

export default function Bal() {
    return (
        <div>
            {BLOGS.map((blog) => (
                <Blog blog={blog} />
            ))}
        </div>
    );
}
